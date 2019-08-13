// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLocalStorage from 'vue-ls'
import VueAnalytics from 'vue-analytics'
import firebase from 'firebase'
/* ここから */
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

Vue.use(VueLocalStorage)
Vue.use(VueAnalytics, {
  id: 'UA-129010178-2',
  router
})

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAOspUPr9vShTnPqftcX9JGolBjd6671VE',
  authDomain: 'list-do-twitter.firebaseapp.com',
  databaseURL: 'https://list-do-twitter.firebaseio.com',
  projectId: 'list-do-twitter',
  storageBucket: '',
  messagingSenderId: '446560748204',
  appId: '1:446560748204:web:ea1241462d92970f'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
/* ここまで */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
