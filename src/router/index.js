import Vue from 'vue'
import Router from 'vue-router'
import Sandbox from './SandBox.vue'
import Home from './Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/SandBox',
      name: 'sandbox',
      component: Sandbox
    }
  ]
})
