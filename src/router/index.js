import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '@/constants'

const Home = () => import('../pages/PageHome.vue')
const Tires = () => import('../pages/PageTires.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: Home
    },
    {
      path: ROUTES_PATHS.TIRES,
      name: ROUTES_PATHS.TIRES,
      component: Tires
    },
    {
      path: ROUTES_PATHS.NOTFOUND,
      name: ROUTES_PATHS.NOTFOUND,
      component: Home
    }
  ]
})

export default router
