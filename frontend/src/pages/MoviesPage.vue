<!--
  PÁGINA: Lista de Filmes
  
  CONCEITOS:
  - v-if / v-else-if / v-else: renderização condicional
  - v-for: loop para renderizar lista
  - :key: identificador único para cada item
  - computed: propriedades reativas calculadas
  - mounted(): lifecycle hook (executado ao montar)
-->
<template>
  <v-container>
    <h1 class="mb-4">
      <v-icon>mdi-filmstrip</v-icon> Catálogo de Filmes
    </h1>

    <!-- V-IF: mostra se loading for true -->
    <v-progress-circular v-if="loading" indeterminate class="d-block mx-auto"></v-progress-circular>

    <!-- V-ELSE-IF: mostra se tiver erro -->
    <v-alert v-else-if="error" type="error">{{ error }}</v-alert>

    <!-- V-ELSE-IF: mostra se lista estiver vazia -->
    <v-alert v-else-if="movies.length === 0" type="info">
      Nenhum filme cadastrado
    </v-alert>

    <!-- V-ELSE: mostra a lista de filmes -->
    <v-row v-else>
      <!-- V-FOR: repete para cada item do array -->
      <!-- :key obrigatório para identificar cada elemento -->
      <v-col v-for="movie in movies" :key="movie.id" cols="12" md="4">
        <!-- Componente reutilizável -->
        <MovieCard :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'

export default {
  name: 'MoviesPage',
  
  // COMPONENTS: componentes usados nesta página
  components: { MovieCard },

  // COMPUTED: propriedades calculadas (reativas)
  // São recalculadas automaticamente quando os dados mudam
  computed: {
    movies() {
      return this.$store.getters.movies
    },
    loading() {
      return this.$store.getters.loading
    },
    error() {
      return this.$store.getters.error
    }
  },

  // MOUNTED: executado quando componente é montado na tela
  mounted() {
    this.$store.dispatch('fetchMovies')
  }
}
</script>
