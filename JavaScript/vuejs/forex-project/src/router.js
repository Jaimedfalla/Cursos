import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import Error from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/About",
    name: "about",
    component: About,
  },
  {
    path: "/coin/:id",
    name: "coin-detail",
    component: CoinDetail,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
