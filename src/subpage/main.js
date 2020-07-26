import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import '../plugins/bootstrap-vue'
import Subpage from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Subpage)
}).$mount('#app')
