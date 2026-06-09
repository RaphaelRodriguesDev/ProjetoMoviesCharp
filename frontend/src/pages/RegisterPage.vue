<!--
  PÁGINA: Cadastro de Usuário
  
  CONCEITOS:
  - v-model: two-way binding
  - v-if: renderização condicional
  - :rules: validação de campos
  - async/await: operações assíncronas
-->
<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="12" md="4">
        <v-card class="pa-6">
          <h2 class="text-center mb-4">
            <v-icon>mdi-account-plus</v-icon> Cadastro
          </h2>

          <!-- Formulário com validação -->
          <v-form ref="formRef" @submit.prevent="handleRegister">
            <v-text-field
              v-model="username"
              label="Usuário"
              prepend-icon="mdi-account"
              :rules="[rules.required, rules.minLength]"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              prepend-icon="mdi-lock"
              :rules="[rules.required, rules.minLength]"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              label="Confirmar Senha"
              type="password"
              prepend-icon="mdi-lock-check"
              :rules="[rules.required, rules.passwordMatch]"
            ></v-text-field>

            <!-- Mensagem de erro -->
            <v-alert v-if="error" type="error" class="mb-4">
              {{ error }}
            </v-alert>

            <!-- Mensagem de sucesso -->
            <v-alert v-if="success" type="success" class="mb-4">
              {{ success }}
            </v-alert>

            <!-- Botão com loading -->
            <v-btn color="primary" block :loading="loading" type="submit">
              Cadastrar
            </v-btn>

            <!-- Link para login -->
            <p class="text-center mt-4">
              Já tem conta? 
              <router-link to="/login">Faça login</router-link>
            </p>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RegisterPage',

  // DATA - estado local do componente
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      loading: false,
      error: '',
      success: '',
      // Regras de validação
      rules: {
        required: value => !!value || 'Campo obrigatório',
        minLength: value => value.length >= 3 || 'Mínimo 3 caracteres',
        passwordMatch: value => value === this.password || 'Senhas não conferem'
      }
    }
  },

  // METHODS - funções do componente
  methods: {
    async handleRegister() {
      // Valida antes de enviar
      const { valid } = await this.$refs.formRef.validate()
      if (!valid) return

      this.loading = true
      this.error = ''
      this.success = ''

      const result = await this.$store.dispatch('register', {
        username: this.username,
        password: this.password
      })

      this.loading = false

      if (result.success) {
        this.success = 'Cadastro realizado! Redirecionando para login...'
        // Redireciona após 2 segundos
        setTimeout(() => {
          this.$router.push('/login')
        }, 2000)
      } else {
        this.error = result.message
      }
    }
  }
}
</script>
