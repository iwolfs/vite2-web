import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about.vue')
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'NotFound', 
    component: () => import('@/pages/NotFound.vue') 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router