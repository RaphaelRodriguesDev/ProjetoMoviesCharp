<!--
  PÁGINA: Login
  
  CONCEITOS:
  - v-model: two-way binding (dados em duas direções)
  - v-if: renderização condicional
  - :loading: prop dinâmica
  - :rules: validação de campos
  - router-link: navegação declarativa
-->
<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card class="pa-6">
          <h2 class="text-center mb-4">
            <v-icon>mdi-login</v-icon> Login
          </h2>

          <!-- Formulário com validação -->
          <v-form ref="formRef" @submit.prevent="handleLogin">
            <v-text-field
              v-model="username"
              label="Usuário"
              prepend-icon="mdi-account"
              :rules="[rules.required]"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              prepend-icon="mdi-lock"
              :rules="[rules.required]"
            ></v-text-field>

            <!-- Mensagem de erro (v-if) -->
            <v-alert v-if="error" type="error" class="mb-4">
              {{ error }}
            </v-alert>

            <!-- Botão com loading -->
            <v-btn color="primary" block :loading="loading" type="submit">
              Entrar
            </v-btn>

            <!-- Link para cadastro -->
            <p class="text-center mt-4">
              Não tem conta? 
              <router-link to="/register">Cadastre-se</router-link>
            </p>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LoginPage',

  // DATA - estado local do componente
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      error: '',
      // Regras de validação
      rules: {
        required: value => !!value || 'Campo obrigatório'
      }
    }
  },

  // METHODS - funções do componente
  methods: {
    async handleLogin() {
      // Valida antes de enviar
      const { valid } = await this.$refs.formRef.validate()
      if (!valid) return

      this.loading = true
      this.error = ''

      const result = await this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })

      this.loading = false

      if (result.success) {
        this.$router.push('/admin')
      } else {
        this.error = result.message
      }
    }
  }
}
</script>
