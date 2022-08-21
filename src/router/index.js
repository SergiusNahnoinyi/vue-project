import { createRouter, createWebHistory } from "vue-router";

import SignUpPage from "../pages/SignUpPage.vue";
import LogInPage from "../pages/LogInPage.vue";
import HomePage from "../pages/HomePage.vue";
import AppartmentsPage from "../pages/AppartmentsPage.vue";
import MyOrdersPage from "../pages/MyOrdersPage.vue";
import ErrorPage from "../pages/ErrorPage.vue";

import store from "../vuex/store";

const routes = [
  {
    path: "/signup",
    component: SignUpPage,
    name: "SignUpPage",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/login",
    component: LogInPage,
    name: "LogInPage",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/",
    component: HomePage,
    name: "HomePage",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/appartments/:id",
    component: AppartmentsPage,
    name: "AppartmentsPage",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/my-orders",
    component: MyOrdersPage,
    name: "MyOrdersPage",
    meta: {
      requiresAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "LogInPage" });
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "HomePage" });
    }
  }
  next();
});

export default router;
