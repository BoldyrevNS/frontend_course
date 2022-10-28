import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Price from "@/views/Price";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/price',
    name: 'Price',
    component: Price
  }
]

const router = new VueRouter({
  routes
})

export default router
