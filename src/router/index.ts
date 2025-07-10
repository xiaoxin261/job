import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Index from '@/front/Index.vue'
import Register from '@/front/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
