import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    {
        path: '/demo',
        name: 'demo',
        component: () => import('../views/demo')
    },
    {
        path: '/add',
        name: 'add',
        component: () => import('../views/add')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router