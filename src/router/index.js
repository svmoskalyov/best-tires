import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '@/constants'
import HomePage from '@/pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: HomePage
    }
  ]
})

export default router
