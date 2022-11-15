import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/pages/Start.vue'
import Quiz from '@/pages/Quiz.vue'
import Result from '@/pages/Result.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start,
    },
    {
        path: '/quiz',
        name: 'Quiz',
        component: Quiz,
    },
    {
        path: '/result/:key',
        name: 'Result',
        component: Result,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
})
export default router
