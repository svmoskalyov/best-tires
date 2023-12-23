import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '@/constants'
import PageHome from '@/pages/PageHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: PageHome
    }
  ]
})

export default router
