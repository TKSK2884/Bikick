import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BiView from "../views/BiView.vue";
import UsedView from "../views/UsedView.vue";
import DownloadView from "../views/DownloadView.vue";
import DetailsView from "../views/DetailsView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Bi",
    name: "Bi",
    component: BiView,
  },
  {
    path: "/Download",
    name: "Download",
    component: DownloadView,
  },
  {
    path: "/Used",
    name: "Used",
    component: UsedView,
  },
  {
    path: "/Details",
    name: "Details",
    component: DetailsView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
