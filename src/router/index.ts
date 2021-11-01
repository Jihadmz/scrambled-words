import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Game from "../views/Game.vue";
import NewFeatures from "../views/New_features.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/game",
    name: "Game",
    component: Game,
  },
  {
    path: "/new-features",
    name: "New Features",
    component: NewFeatures,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
