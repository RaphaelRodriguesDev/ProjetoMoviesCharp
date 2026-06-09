/**
 * VUE ROUTER - Configuração de Rotas
 */
import { createRouter, createWebHistory } from "vue-router";
import * as api from "../api";

// Importação das páginas
import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import MoviesPage from "../pages/MoviesPage.vue";
import AdminPage from "../pages/AdminPage.vue";

// Definição das rotas
const routes = [
  { path: "/", name: "Home", component: HomePage },
  { path: "/login", name: "Login", component: LoginPage },
  { path: "/register", name: "Register", component: RegisterPage },
  { path: "/movies", name: "Movies", component: MoviesPage },
  {
    path: "/admin",
    name: "Admin",
    component: AdminPage,
    meta: { requiresAuth: true },
  },
];

// Criação do router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard de navegação - protege rotas
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !api.isLoggedIn()) {
    next("/login");
  } else {
    next();
  }
});

export default router;
