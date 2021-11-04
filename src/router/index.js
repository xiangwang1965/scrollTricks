import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import App from '../App.vue'
const routes = [
    {
        path: '/',
        name: 'App',
        component: App,
        children: [
            {
                path: 'index',
                name: 'Index',
                component: Index
            },
            {
                path: 'profile',
                name: 'Profile',
                component: Home
            },
            {
                path: 'work',
                name: 'Work',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Home
            },
            {
                path: 'contact',
                name: 'Contact',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: Home
            }]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes,
    scrollBehavior: function (to, from, savedPosition) {
        //     if (savedPosition) {
        //         // savedPosition is only available for popstate navigations.
        //         return savedPosition
        //     } else {
        //         const position = {}

        //         // scroll to anchor by returning the selector
        //         if (to.hash) {
        //             position.selector = to.hash

        //             // specify offset of the element
        //             if (to.hash === '#anchor2') {
        //                 position.offset = { y: 100 }
        //             }

        //             // bypass #1number check
        //             if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
        //                 return position
        //             }

        //             // if the returned position is falsy or an empty object,
        //             // will retain current scroll position.
        //             return false
        //         }

        //         return new Promise(resolve => {
        //             // check if any matched route config has meta that requires scrolling to top
        //             if (to.matched.some(m => m.meta.scrollToTop)) {
        //                 // coords will be used if no selector is provided,
        //                 // or if the selector didn't match any element.
        //                 position.x = 0
        //                 position.y = 0
        //             }

        //             // wait for the out transition to complete (if necessary)
        //             this.app.$root.$once('triggerScroll', () => {
        //                 // if the resolved position is falsy or an empty object,
        //                 // will retain current scroll position.
        //                 resolve(position)
        //             })
        //         })
        //     }
    }
})

export default router
