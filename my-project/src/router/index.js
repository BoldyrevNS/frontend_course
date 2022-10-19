import Vue from 'vue'
import Router from 'vue-router'
import HomeView from "../views/HomeView";
import SearchView from "../views/SearchView";
import PicView from "../views/PicView";

Vue.use(Router)

 export default new Router({
   routes: [
     {
       path: '/',
       name: 'home',
       component: HomeView
     },
     {
       path: '/search',
       name: 'search',
       component: SearchView
     },
     {
       path: '/view',
       name: 'view',
       component: PicView
     }
   ]
 })
