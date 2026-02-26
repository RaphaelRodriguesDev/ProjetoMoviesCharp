<!--
  APP.VUE - Componente Principal (Raiz)
  
  CONCEITOS:
  - <router-view>: renderiza a página atual da rota
  - props: passando dados para componente filho (:is-logged-in, :username)
  - eventos: ouvindo eventos do filho (@logout)
  - computed: propriedades reativas
  - methods: funções do componente
-->
<template>
  <v-app>
    <!-- Passando props e ouvindo eventos do componente filho -->
    <!-- :is-logged-in = prop (pai -> filho) -->
    <!-- :username = prop com nome do usuário -->
    <!-- @logout = evento (filho -> pai) -->
    <AppNavbar :is-logged-in="isLoggedIn" :username="username" @logout="logout" />

    <!-- Conteúdo: renderiza a página atual -->
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  
  // COMPONENTS: componentes usados
  components: { AppNavbar },

  // COMPUTED: propriedades reativas
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    username() {
      return this.$store.getters.username
    }
  },

  // METHODS: funções do componente
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>
