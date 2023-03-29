import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "air-pollution",
    component: () => import("../views/AirPollution.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
