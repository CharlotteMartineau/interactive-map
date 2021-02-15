import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Continent from '../views/Continent.vue'
import SearchCountry from '../views/SearchCountry.vue'
import Country from '../views/Country.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/europe',
    name: 'europe',
    component: Continent
  },
  {
    path: '/oceania',
    name: 'oceania',
    component: Continent
  },
  {
    path: '/asia',
    name: 'asia',
    component: Continent
  },
  {
    path: '/africa',
    name: 'africa',
    component: Continent
  },
  {
    path: '/south-america',
    name: 'southAmerica',
    component: Continent
  },
  {
    path: '/north-america',
    name: 'northAmerica',
    component: Continent
  },
  {
    path: '/central-america',
    name: 'centralAmerica',
    component: Continent
  },
  {
    path: '/search',
    name: 'search',
    component: SearchCountry
  },
  {
    path: '/country/:name',
    name: 'country',
    component: Country
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
