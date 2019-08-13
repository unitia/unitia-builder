import Vue from 'vue'
import Router from 'vue-router'
import HowtoTodo from '../components/HowtoTodo'
import Todo from '../components/Todo'
import Home from '../components/Home'
import Login from '../components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/HowtoTodo',
      name: 'HowtoTodo',
      component: HowtoTodo
    },
    {
      path: '/Todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: 'Login',
      name: 'Login',
      component: Login
    }
  ]
})
