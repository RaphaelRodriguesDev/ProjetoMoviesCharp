<!--
  COMPONENTE: MovieCard
  Card reutilizável para exibir filme
  
  CONCEITOS:
  - props: recebe dados do componente pai
  - slot: permite inserir conteúdo customizável
  - v-if: renderização condicional
  - :src: binding dinâmico de atributo
  - {{ }}: interpolation (mostrar dados)
-->
<template>
  <v-card>
    <!-- :src = v-bind:src (binding dinâmico) -->
    <v-img 
      :src="movie.posterUrl || 'https://via.placeholder.com/300x400'" 
      height="200"
    ></v-img>
    
    <!-- {{ }} = Interpolation: exibe o valor da variável -->
    <v-card-title>{{ movie.title }}</v-card-title>
    <v-card-text>{{ movie.overview }}</v-card-text>
    
    <!-- SLOT: permite que o pai insira conteúdo aqui -->
    <v-card-actions v-if="showActions">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'MovieCard',
  
  // PROPS: dados que o componente RECEBE do pai
  props: {
    movie: {
      type: Object,     // Tipo esperado
      required: true    // Obrigatório
    },
    showActions: {
      type: Boolean,
      default: false    // Valor padrão
    }
  }
}
</script>
