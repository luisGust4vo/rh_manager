import "./assets/style.css";
import { createApp } from "vue";
import LoginPage from "./views/LoginPage.vue";
import router from "./router";
import axios from "./services/axios";

const app = createApp(LoginPage);

app.config.globalProperties.$axios = axios;

app.use(router);

app.mount("#app");
