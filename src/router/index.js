import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import AppartmentsPage from "../pages/AppartmentsPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "HomePage",
  },
  {
    path: "/appartments/:id",
    component: AppartmentsPage,
    name: "AppartmentsPage",
  },
  {
    path: "/404",
    component: ErrorPage,
    name: "ErrorPage",
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
