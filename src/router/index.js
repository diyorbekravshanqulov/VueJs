import { createRouter, createWebHistory } from "vue-router";

import home from "../pages/home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../pages/not-found.vue"),
    },
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/shop",
      name: "shop",
      component: () => import("../pages/shop.vue"),
    },
    {
      path: "/shop/products",
      name: "shop-products",
      component: () => import("../pages/shop-products.vue"),
    },
  ],
});

export default router;
