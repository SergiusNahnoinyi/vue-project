import { createRouter, createWebHistory } from "vue-router";

import SignUpPage from "../pages/SignUpPage.vue";
import SignInPage from "../pages/SignInPage.vue";
import HomePage from "../pages/HomePage.vue";
import AppartmentsPage from "../pages/AppartmentsPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

const routes = [
  {
    path: "/signup",
    component: SignUpPage,
    name: "SignUpPage",
  },
  {
    path: "/signin",
    component: SignInPage,
    name: "SignInPage",
  },
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
    path: "/:catchAll(.*)",
    component: ErrorPage,
    name: "ErrorPage",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
