/**
 * MAIN.JS - Inicialização do Vue
 */
import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

// Store e Router (em pastas)
import store from "./store";
import router from "./router";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(store).use(router).mount("#app");
