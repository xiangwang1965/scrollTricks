import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '@/views/Home.vue';
import Home1 from '@/views/Home1.vue';
import Home2 from '@/views/Home2.vue';

import Index from '../views/index.vue';;

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location) {
    return originalPush.call(this, location).catch(err => err);
}
const routes = [

    {
        path: '/',
        name: 'Index',
        component: Index,
        active: false
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Home,
        active: false,
        meta: {
            scrollToTop: true
        }
    },
    {
        path: '/work',
        name: 'Work',
        component: Home1,
        active: false
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Home2,
        active: false
    }
];

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
});

export default router;
