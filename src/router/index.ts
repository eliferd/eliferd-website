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
    meta: {
      title: 'ELIFERD - Accueil'
    }
  },
  {
    path: "/projects",
    name: "Projets",
    component: Projects,
    meta: {
      title: 'ELIFERD - Mes projets'
    }
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: {
      title: 'ELIFERD - Mon portfolio'
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: 'ELIFERD - Contact'
    }
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

export default router;
