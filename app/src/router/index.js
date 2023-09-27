import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DiscoverView from "../views/DiscoverView.vue";
import BlogView from "../views/BlogView.vue";


/**Define routes here */
const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
  { path: "/discover", name: "discover", component: DiscoverView },
  { path: "/blog", name: "blog", component: BlogView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
