<!--
  PÁGINA: Home
  
  CONCEITOS:
  - v-if: renderização condicional
  - @click: evento de clique
  - to: navegação com router-link
  - $router.push(): navegação programática
-->
<template>
  <v-container class="text-center py-12">
    <h1 class="text-h3 mb-4">
      <v-icon size="48">mdi-movie</v-icon>
      Movies App
    </h1>
    <p class="text-grey mb-8">Sistema de Gerenciamento de Filmes</p>

    <v-row justify="center">
      <v-col cols="12" md="4">
        <!-- @click: executa ao clicar -->
        <v-card color="primary" dark class="pa-6" @click="$router.push('/movies')">
          <v-icon size="48">mdi-filmstrip</v-icon>
          <h3 class="mt-2">Ver Filmes</h3>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="teal" dark class="pa-6" @click="$router.push('/admin')">
          <v-icon size="48">mdi-cog</v-icon>
          <h3 class="mt-2">Administração</h3>
        </v-card>
      </v-col>
    </v-row>

    <!-- v-if: só mostra se NÃO estiver logado -->
    <!-- to: navega para a rota especificada -->
    <v-btn v-if="!isLoggedIn" color="primary" class="mt-8" to="/login">
      <v-icon left>mdi-login</v-icon>
      Fazer Login
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',

  // COMPUTED: propriedade reativa que acessa o store
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  }
}
</script>
