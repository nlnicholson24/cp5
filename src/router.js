import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import MyQuotes from './views/MyQuotes.vue'
import Login from './views/Login.vue'
import PublicFeed from './views/PublicFeed.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/myquotes',
      name: 'myquotes',
      component: MyQuotes,
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/publicfeed',
      name: 'publicfeed',
      component: PublicFeed
    }
  ]
})
