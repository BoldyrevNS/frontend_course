import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "@/views/HomeView";
import CatalogView from "@/views/CatalogView";
import AutView from "@/views/AutView";
import AboutView from "@/views/AboutView";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/catalog',
        name: 'CatalogView',
        component: CatalogView
    },

    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/aut',
        name: 'AutView',
        component: AutView
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router