// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLocalStorage from 'vue-ls'
/* ここから */
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

Vue.use(VueLocalStorage)
/* ここまで */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
