import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";
import Listing from "../views/Listing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/article/:slug",
    name: "Article",
    component: Article,
  },
  {
    path: "/listing/",
    name: "Listing",
    component: Listing,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
