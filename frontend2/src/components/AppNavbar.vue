<!--
  COMPONENTE: AppNavbar
  Barra de navegação do app
-->
<template>
  <v-app-bar color="primary">
    <v-toolbar-title @click="$router.push('/')" style="cursor:pointer">
      <v-icon>mdi-movie</v-icon> Movies App
    </v-toolbar-title>
    
    <v-spacer></v-spacer>
    
    <v-btn text to="/">Home</v-btn>
    <v-btn text to="/movies">Filmes</v-btn>
    
    <!-- v-if / v-else -->
    <v-btn v-if="!isLoggedIn" text to="/login">Entrar</v-btn>
    <template v-else>
      <v-btn text to="/admin">Admin</v-btn>
      <!-- Exibe o nome do usuário logado -->
      <v-chip class="mx-2" color="white" variant="outlined">
        <v-icon start>mdi-account</v-icon>
        {{ username }}
      </v-chip>
      <v-btn icon @click="$emit('logout')">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppNavbar',
  props: {
    isLoggedIn: {
      type: Boolean,
      default: false
    },
    username: {
      type: String,
      default: ''
    }
  },
  emits: ['logout']
}
</script>
