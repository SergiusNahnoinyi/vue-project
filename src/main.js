import { createApp } from "vue";
import router from "./router";
import store from "./vuex/store";
import App from "./App.vue";
import "./scss/index.scss";

createApp(App).use(router).use(store).mount("#app");
