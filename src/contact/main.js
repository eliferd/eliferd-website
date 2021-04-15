import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import '../plugins/bootstrap-vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faDribbble, faFacebookF, faGithub, faInstagram, faSteamSquare, faTwitter, faVimeoV, faYoutube, faTwitch
} from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter, faFacebookF, faInstagram, faYoutube, faSteamSquare, faGithub, faVimeoV, faDribbble, faTwitch)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
