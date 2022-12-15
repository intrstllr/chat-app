import { createRouter, createWebHistory } from "vue-router";
import accountUser1 from "../pages/PageOfFirstUser.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/page1",
      name: "account1",
      component: accountUser1,
    },
    {
      path: "/page2",
      name: "account2",

      component: () => import("../pages/PageOfSecondUser.vue"),
    },
  ],
});

export default router;
