import { createRouter, createWebHashHistory } from 'vue-router'
import DeliveryPage from "@/pages/DeliveryPage";
import AuthVue from "@/pages/AuthPage";
import GreetingsPage from "@/pages/GreetingsPage";

const routes = [
    {
        path: '/',
        name: 'GreetingsPage',
        component: GreetingsPage
    },

    {
      path: '/auth',
      name: 'AuthPage',
      component: AuthVue
    },

    {
        path: '/delivery',
        name: 'DeliveryPage',
        component: DeliveryPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
