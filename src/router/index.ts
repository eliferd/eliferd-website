import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Projects from "../views/Projects.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: "/",
    name: "Accueil",
    component: Home,
    
  },
  {
    path: "/projects",
    name: "Projets",
    component: Projects
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

export default router;
