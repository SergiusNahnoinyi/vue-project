import { createRouter, createWebHistory } from "vue-router";

import SignUpPage from "../pages/SignUpPage.vue";
import LogInPage from "../pages/LogInPage.vue";
import HomePage from "../pages/HomePage.vue";
import AppartmentsPage from "../pages/AppartmentsPage.vue";
import MyOrdersPage from "../pages/MyOrdersPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

const routes = [
  {
    path: "/signup",
    component: SignUpPage,
    name: "SignUpPage",
  },
  {
    path: "/login",
    component: LogInPage,
    name: "LogInPage",
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
    path: "/my-orders",
    component: MyOrdersPage,
    name: "MyOrdersPage",
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
