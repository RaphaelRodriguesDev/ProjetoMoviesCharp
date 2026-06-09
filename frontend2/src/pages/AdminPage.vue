<!--
  PÁGINA: Admin - CRUD de Filmes
  
  CONCEITOS:
  - v-for: loop para renderizar lista
  - v-if/v-else: renderização condicional
  - v-model: two-way binding para dialogs
  - slots: conteúdo customizável em componentes
  - computed: propriedades reativas calculadas
  - methods: funções do componente
  - async/await: operações assíncronas
-->
<template>
  <v-container>
    <h1 class="mb-4">
      <v-icon>mdi-cog</v-icon> Administração de Filmes
    </h1>

    <!-- Botão adicionar -->
    <v-btn color="primary" class="mb-4" @click="openDialog()">
      <v-icon left>mdi-plus</v-icon> Novo Filme
    </v-btn>

    <!-- Mensagem de sucesso/erro -->
    <v-alert v-if="message" :type="messageType" class="mb-4" closable @click:close="message = ''">
      {{ message }}
    </v-alert>

    <!-- Loading principal -->
    <v-progress-circular v-if="loading" indeterminate class="d-block mx-auto"></v-progress-circular>

    <!-- Lista vazia -->
    <v-alert v-else-if="movies.length === 0" type="info">
      Nenhum filme cadastrado. Clique em "Novo Filme" para adicionar.
    </v-alert>

    <!-- Lista de filmes usando MovieCard com ações -->
    <v-row v-else>
      <v-col v-for="movie in movies" :key="movie.id" cols="12" md="4">
        <!-- Componente MovieCard com slot para ações -->
        <MovieCard :movie="movie" show-actions>
          <template #actions>
            <v-btn color="warning" size="small" @click="openDialog(movie)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="error" size="small" @click="handleDelete(movie)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </MovieCard>
      </v-col>
    </v-row>

    <!-- Dialog de formulário -->
    <v-dialog v-model="dialog" max-width="500" persistent>
      <v-card>
        <v-card-title>{{ editingMovie ? 'Editar' : 'Novo' }} Filme</v-card-title>
        <v-card-text>
          <!-- Componente MovieForm com loading -->
          <MovieForm 
            :movie="editingMovie" 
            :saving="saving"
            @save="handleSave" 
            @cancel="dialog = false" 
          />
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Componente ConfirmDialog -->
    <ConfirmDialog 
      v-model="confirmDialog"
      title="Confirmar exclusão?"
      :message="deletingMovie?.title || ''"
      @confirm="confirmDelete"
    />
  </v-container>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
import MovieForm from '../components/MovieForm.vue'
import ConfirmDialog from '../components/ConfirmDialog.vue'

export default {
  name: 'AdminPage',
  components: { MovieCard, MovieForm, ConfirmDialog },

  // DATA - estado local do componente
  data() {
    return {
      dialog: false,
      confirmDialog: false,
      editingMovie: null,
      deletingMovie: null,
      saving: false,          // Loading do botão salvar
      message: '',            // Mensagem de feedback
      messageType: 'success'  // Tipo: success, error, info
    }
  },

  // COMPUTED - propriedades reativas do store
  computed: {
    movies() {
      return this.$store.getters.movies
    },
    loading() {
      return this.$store.getters.loading
    }
  },

  // MOUNTED - executado quando componente é montado
  mounted() {
    this.$store.dispatch('fetchMovies')
  },

  // METHODS - funções do componente
  methods: {
    // Abrir dialog (novo ou editar)
    openDialog(movie = null) {
      this.editingMovie = movie
      this.dialog = true
    },

    // Salvar (criar ou atualizar)
    async handleSave(formData) {
      this.saving = true
      try {
        if (this.editingMovie) {
          await this.$store.dispatch('updateMovie', { 
            id: this.editingMovie.id, 
            movie: formData 
          })
          this.showMessage('Filme atualizado com sucesso!', 'success')
        } else {
          await this.$store.dispatch('createMovie', formData)
          this.showMessage('Filme criado com sucesso!', 'success')
        }
        this.dialog = false
      } catch (error) {
        this.showMessage('Erro ao salvar filme. Tente novamente.', 'error')
      }
      this.saving = false
    },

    // Abrir confirmação de delete
    handleDelete(movie) {
      this.deletingMovie = movie
      this.confirmDialog = true
    },

    // Confirmar delete
    async confirmDelete() {
      try {
        await this.$store.dispatch('deleteMovie', this.deletingMovie.id)
        this.showMessage('Filme excluído com sucesso!', 'success')
      } catch (error) {
        this.showMessage('Erro ao excluir filme.', 'error')
      }
      this.confirmDialog = false
    },

    // Exibir mensagem de feedback
    showMessage(text, type) {
      this.message = text
      this.messageType = type
      // Remove mensagem após 3 segundos
      setTimeout(() => { this.message = '' }, 3000)
    }
  }
}
</script>
