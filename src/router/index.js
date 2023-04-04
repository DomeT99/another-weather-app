import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/airpollution",
    name: "air-pollution",
    component: () => import("../views/AirPollution.vue"),
  },
  {
    path: "/offline",
    name: "offline",
    component: () => import("../views/Errors/Offline.vue"),
  },
  {
    path: "/",
    redirect: "/search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/Errors/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
