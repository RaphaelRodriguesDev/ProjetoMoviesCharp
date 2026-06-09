<!--
  COMPONENTE: MovieForm
  Formulário para criar/editar filme
  
  CONCEITOS:
  - props: recebe dados do componente pai
  - emits: envia eventos para o componente pai
  - data(): estado local do componente
  - watch: observa mudanças em propriedades
  - :rules: validação de campos do Vuetify
-->
<template>
  <v-form ref="formRef" @submit.prevent="handleSave">
    <!-- Campo com validação obrigatória -->
    <v-text-field 
      v-model="form.title" 
      label="Título" 
      :rules="[rules.required]"
    ></v-text-field>
    
    <v-text-field 
      v-model="form.posterUrl" 
      label="URL do Poster"
    ></v-text-field>
    
    <v-textarea 
      v-model="form.overview" 
      label="Sinopse" 
      :rules="[rules.required]"
    ></v-textarea>
    
    <div class="d-flex justify-end mt-4">
      <v-btn class="mr-2" @click="$emit('cancel')">Cancelar</v-btn>
      <v-btn color="primary" type="submit" :loading="saving">Salvar</v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'MovieForm',
  
  // PROPS - dados recebidos do componente pai
  props: {
    movie: Object,    // null = novo, objeto = edição
    saving: Boolean   // indica se está salvando
  },
  
  // EMITS - eventos enviados ao componente pai
  emits: ['cancel', 'save'],

  // DATA - estado local do componente
  data() {
    return {
      form: {
        title: '',
        posterUrl: '',
        overview: ''
      },
      // Regras de validação
      rules: {
        required: value => !!value || 'Campo obrigatório'
      }
    }
  },

  // WATCH - observa mudanças nas props
  watch: {
    movie: {
      immediate: true,  // executa imediatamente ao criar
      handler(newMovie) {
        if (newMovie) {
          // Edição: preenche com dados existentes
          this.form.title = newMovie.title || ''
          this.form.posterUrl = newMovie.posterUrl || ''
          this.form.overview = newMovie.overview || ''
        } else {
          // Novo: limpa o formulário
          this.form.title = ''
          this.form.posterUrl = ''
          this.form.overview = ''
        }
      }
    }
  },

  // METHODS - funções do componente
  methods: {
    async handleSave() {
      // Valida o formulário antes de salvar
      const { valid } = await this.$refs.formRef.validate()
      if (valid) {
        this.$emit('save', { ...this.form })
      }
    }
  }
}
</script>
