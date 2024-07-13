import { createRouter, createWebHistory } from 'vue-router'
import ChooseStretchRoutine from '../views/ChooseStretchRoutine.vue'

console.log(import.meta.env.BASE_URL)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ChooseStretchRoutine,
        },
        {
            path: '/stopwatch',
            name: 'stopwatch',
            component: () => import('../views/StopWatch.vue'),
        },
    ],
})

export default router
