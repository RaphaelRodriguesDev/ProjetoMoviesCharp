/**
 * VUEX STORE - Estado Global
 */
import { createStore } from "vuex";
import * as api from "../api";

export default createStore({
  // Estado da aplicação
  state: {
    isLoggedIn: api.isLoggedIn(),
    username: api.getUsername(),
    movies: [],
    loading: false,
    error: null,
  },

  // Mutations - alteram o estado
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.isLoggedIn = value;
    },
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_LOADING(state, value) {
      state.loading = value;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },

  // Actions - lógica assíncrona
  actions: {
    async login({ commit }, { username, password }) {
      try {
        const token = await api.login(username, password);
        api.saveToken(token);
        // Salva o username que foi usado no login
        api.saveUsername(username);
        commit("SET_LOGGED_IN", true);
        commit("SET_USERNAME", username);
        return { success: true };
      } catch (error) {
        return { success: false, message: "Usuário ou senha inválidos" };
      }
    },

    async register(_, { username, password }) {
      try {
        await api.register(username, password);
        return { success: true };
      } catch (error) {
        return {
          success: false,
          message: "Erro ao cadastrar. Username já existe.",
        };
      }
    },

    logout({ commit }) {
      api.removeToken();
      api.removeUsername();
      commit("SET_LOGGED_IN", false);
      commit("SET_USERNAME", null);
    },

    async fetchMovies({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      try {
        const movies = await api.getMovies();
        commit("SET_MOVIES", movies);
      } catch (error) {
        commit("SET_ERROR", "Erro ao carregar filmes");
      }
      commit("SET_LOADING", false);
    },

    async createMovie({ dispatch }, movie) {
      await api.createMovie(movie);
      dispatch("fetchMovies");
    },

    async updateMovie({ dispatch }, { id, movie }) {
      await api.updateMovie(id, movie);
      dispatch("fetchMovies");
    },

    async deleteMovie({ dispatch }, id) {
      await api.deleteMovie(id);
      dispatch("fetchMovies");
    },
  },

  // Getters - acesso ao estado
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    username: state => state.username,
    movies: state => state.movies,
    loading: state => state.loading,
    error: st