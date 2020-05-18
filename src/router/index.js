import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Listing from "../views/Listing.vue";
import Article from "../views/Article.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/listing",
    name: "Listing",
    component: Listing,
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
