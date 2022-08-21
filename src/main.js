import { createApp } from "vue";
import Notifications from "@kyvg/vue3-notification";
import router from "./router";
import store from "./vuex/store";
import App from "./App.vue";
import "./scss/index.scss";

createApp(App).use(router).use(store).use(Notifications).mount("#app");
