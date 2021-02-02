import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Europe from '../views/Europe.vue'
import Oceania from '../views/Oceania.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/europe',
    name: 'Europe',
    component: Europe
  },
  {
    path: '/oceania',
    name: 'Oceania',
    component: Oceania
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
