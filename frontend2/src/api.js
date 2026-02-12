/**
 * API - Chamadas ao Backend
 * Arquivo único e simples para todas as requisições
 */
import axios from "axios";

// Cliente HTTP
const api = axios.create({
  baseURL: "/api",
  timeout: 10000,
});

// Adiciona token em todas as requisições
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ========== FILMES ==========

export async function getMovies() {
  const response = await api.get("/Movie/get-all");
  return response.data;
}

export async function getMovie(id) {
  const response = await api.get(`/Movie/${id}`);
  return response.data;
}

export async function createMovie(movie) {
  const response = await api.post("/Movie", movie);
  return response.data;
}

export async function updateMovie(id, movie) {
  const response = await api.put(`/Movie/${id}`, movie);
  return response.data;
}

export async function deleteMovie(id) {
  const response = await api.delete(`/Movie/${id}`);
  return response.data;
}

// ========== LOGIN / USUÁRIO ==========

export async function login(username, password) {
  const response = await api.post("/Login", { username, password });
  return response.data;
}

export async function register(username, password) {
  // Endpoint correto: POST /api/User
  // NOTA: Este endpoint requer autenticação no backend atual
  const response = await api.post("/User", { username, password });
  return response.data;
}

export function saveToken(token) {
  localStorage.setItem("token", token);
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function saveUsername(username) {
  localStorage.setItem("username", username);
}

export function getUsername() {
  return localStorage.getItem("username");
}

export function removeUsername() {
  localStorage.removeItem("username");
}

export function isLoggedIn() {
  return !!localStorage.getItem("token");
}
