import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from './pages/Layout.vue'
import Home from './pages/Home.vue'
import Cafes from './pages/Cafes.vue'
import NewCafe from './pages/NewCafe.vue'
import Cafe from './pages/Cafe.vue'



/*
    Extends Vue to use Vue Router
*/
Vue.use( VueRouter )

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'layout',
            component: Layout,
            children:[

                {
                    path: 'home',
                    name: 'home',
                    component: Home
                },
                {
                    path: '/cafes',
                    name: 'cafes',
                    component: Cafes
                },
                {
                    path: '/cafes/new',
                    name: 'newcafe',
                    component: NewCafe
                },
                {
                    path: '/cafes/:id',
                    name: 'cafe',
                    component: Cafe
                }
            ]
        }
    ]
});