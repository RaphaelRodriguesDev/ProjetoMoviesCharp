# Movies App - Frontend Vue.js 3

Frontend desenvolvido em Vue.js 3 com Vite, seguindo princípios de **Clean Architecture**, **SOLID** e **Clean Code** de forma simplificada e didática.

## 🚀 Stack Tecnológica

- **Vue.js 3** - Framework JavaScript progressivo
- **Vite** - Build tool rápido e moderno
- **Vuetify 3** - Framework de UI Material Design
- **Vue Router 4** - Roteamento para SPA
- **Vuex 4** - Gerenciamento de estado
- **Axios** - Cliente HTTP

## 📁 Estrutura do Projeto (Clean Architecture)

```
frontend/
├── src/
│   ├── domain/              # 🏛️ CAMADA DE DOMÍNIO
│   │   └── entities/        # Entidades de negócio (Movie, User)
│   │
│   ├── application/         # 📋 CAMADA DE APLICAÇÃO
│   │   └── services/        # Casos de uso (movieService, authService)
│   │
│   ├── infrastructure/      # 🔌 CAMADA DE INFRAESTRUTURA
│   │   └── api/             # Comunicação com API (repositories)
│   │
│   ├── presentation/        # 🎨 CAMADA DE APRESENTAÇÃO
│   │   ├── components/      # Componentes Vue reutilizáveis
│   │   └── pages/           # Páginas da aplicação
│   │
│   ├── store/               # 🗄️ VUEX (Estado Global)
│   │   └── modules/         # Módulos da store (auth, movies)
│   │
│   └── router/              # 🛣️ VUE ROUTER (Rotas)
```

## 🎯 Conceitos Vue.js Demonstrados

| Conceito          | Onde Encontrar                               |
| ----------------- | -------------------------------------------- |
| `v-if` / `v-else` | AppNavbar, MovieCard, todas as páginas       |
| `v-for`           | HomePage, MoviesPage, AdminPage, ComparePage |
| `v-model`         | Todos os formulários e dialogs               |
| `props`           | MovieCard, ConfirmDialog, SearchBar          |
| `emits`           | Todos os componentes                         |
| `computed`        | Store getters, propriedades calculadas       |
| `watch`           | SearchBar, MovieFormDialog                   |
| `Vue Router`      | Navegação entre páginas                      |
| `Vuex`            | Gerenciamento de estado global               |

## 📦 Instalação

```bash
# Entrar na pasta do frontend
cd frontend

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🌐 Endpoints da API (Backend)

O frontend consome os seguintes endpoints:

| Método | Endpoint             | Descrição           |
| ------ | -------------------- | ------------------- |
| POST   | `/api/Login`         | Autenticação        |
| GET    | `/api/Movie/get-all` | Listar filmes       |
| GET    | `/api/Movie/{id}`    | Buscar filme por ID |
| POST   | `/api/Movie`         | Criar filme         |
| PUT    | `/api/Movie/{id}`    | Atualizar filme     |
| DELETE | `/api/Movie/{id}`    | Excluir filme       |

## 🎓 Para Fins Didáticos

Este projeto foi desenvolvido para demonstrar:

1. **Clean Architecture** - Separação clara de responsabilidades
2. **SOLID** - Princípios de design orientado a objetos
3. **Clean Code** - Código limpo e legível
4. **Componentes Vue** - Reutilização e composição
5. **Gerenciamento de Estado** - Vuex com módulos
6. **Roteamento SPA** - Vue Router com guards

## 📝 Funcionalidades

- ✅ Página Home com painéis de navegação
- ✅ Listagem de filmes com cards
- ✅ Busca com autocomplete
- ✅ CRUD completo de filmes (Admin)
- ✅ Seleção em lote com checkbox
- ✅ Ações em lote (excluir múltiplos)
- ✅ Página de comparação de dados
- ✅ Autenticação JWT
- ✅ Rotas protegidas

## 🔧 Configuração do Proxy

O Vite está configurado para fazer proxy das requisições `/api` para o backend:

```javascript
// vite.config.js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000', // Ajuste conforme seu backend
      changeOrigin: true
    }
  }
}
```

---

Desenvolvido com ❤️ para fins educacionais.
