import { createRouter, createWebHistory } from 'vue-router'
import Start from '@/pages/Start.vue'
import Quiz from '@/pages/Quiz.vue'
import Result from '@/pages/Result.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
    {
        path: import.meta.env.BASE_URL,
        name: 'Start',
        component: Start,
    },
    {
        path: import.meta.env.BASE_URL + 'quiz',
        name: 'Quiz',
        component: Quiz,
    },
    {
        path: import.meta.env.BASE_URL + 'result/:key',
        name: 'Result',
        component: Result,
        props: true
    },
    {
        path: import.meta.env.BASE_URL + ':pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
]
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})
export default router
