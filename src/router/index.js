import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: import('../components/Dashboard.vue')
        },
        {
            path: '/component/:name',
            component: import('../components/Template.vue')
        }
    ]
});

export default router