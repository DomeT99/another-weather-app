import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "search",
    component: () => import("../views/Search.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
