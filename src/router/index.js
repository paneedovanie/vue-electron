import Vue from "vue";
import VueRouter from "vue-router";
import m from "./main";
import p from "./public";

Vue.use(VueRouter);

const routes = [p, m];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
