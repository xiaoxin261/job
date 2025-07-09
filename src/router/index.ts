import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Inform from '@/views/Inform.vue'
import Index from '@/front/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/inform',
    name: 'inform',
    component: Inform
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
