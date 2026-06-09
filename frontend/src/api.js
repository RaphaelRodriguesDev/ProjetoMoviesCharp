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

export async function login(username, password, recaptchaToken) {
  const response = await api.post("/Login", {
    username,
    password,
    recaptchaToken,
  });
  return response.data;
}

export async function register(username, password, recaptchaToken) {
  const response = await api.post("/User", {
    username,
    password,
    recaptchaToken,
  });
  return response.data;
}

// ========== reCAPTCHA v3 ==========

const RECAPTCHA_SITE_KEY = "6LdfkmksAAAAAHGq7ndQXlLQ6HcSprXUoSJ5GquJ";

export function getRecaptchaToken(action) {
  return new Promise((resolve, reject) => {
    // Timeout de 5s para não travar se reCAPTCHA não carregar
    const timeout = setTimeout(
      () => reject(new Error("reCAPTCHA timeout")),
      5000,
    );

    if (!window.grecaptcha) {
      clearTimeout(timeout);
      return reject(new Error("reCAPTCHA não carregado"));
    }

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action })
        .then(token => {
          clearTimeout(timeout);
          resolve(token);
        })
        .catch(err => {
          clearTimeout(timeout);
          reject(err);
        });
    });
  });
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
