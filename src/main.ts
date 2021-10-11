import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt, faExpand } from '@fortawesome/free-solid-svg-icons';
import {
  faDribbble,
  faFacebookF,
  faGithub,
  faInstagram,
  faSteamSquare,
  faTwitter,
  faVimeoV,
  faYoutube,
  faTwitch
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faExternalLinkAlt, faExpand, faTwitter, faFacebookF, faInstagram, faYoutube, faSteamSquare, faGithub, faVimeoV, faDribbble, faTwitch);


Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
