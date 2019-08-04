import Vue from 'vue'
import Router from 'vue-router'
import HowtoTodo from '../components/HowtoTodo'
import Todo from '../components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HowtoTodo',
      name: 'HowtoTodo',
      component: HowtoTodo
    },
    {
      path: '/Todo',
      name: 'Todo',
      component: Todo
    }
  ]
})
