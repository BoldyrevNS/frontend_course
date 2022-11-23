import Vue from 'vue'
import Router from 'vue-router'
import HomeView from "../views/HomeView";
import SearchView from "../views/SearchView";
import PicView from "../views/PicView";
import ReportView from "../views/ReportView";
import ReportSuccessView from "../views/ReportSuccessView";
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
     },
     {
       path: '/report',
       name: 'report',
       component: ReportView
     },
     {
       path: '/report_success',
       name: 'report_success',
       component: ReportSuccessView
     }
   ]
 })
