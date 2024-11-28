import "./assets/style.css";
import { createApp } from "vue";
import LoginPage from "./views/LoginPage.vue";
import router from "./router";

const app = createApp(LoginPage);

app.use(router);

app.mount("#app");
