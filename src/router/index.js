import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routes = [
    {
        path: '/demo',
        name: 'demo',
        component: () => import('../views/demo')
    }
];

const router = new VueRouter({
    routes
})

export default router