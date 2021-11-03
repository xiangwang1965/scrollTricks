import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index.vue'
const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { transition: 'slide-left' },
    },
    {
        path: '/entry',
        name: 'Entry',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Entry.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior (to, from, savedPosition) {
        // 始终滚动到顶部
        return { top: 0 }
    },
})

export default router
