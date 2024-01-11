import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '@/constants'

const HomeView = () => import('../views/HomeView.vue')
const TiresView = () => import('../views/TiresView.vue')
const SignUpView = () => import('../views/SignUpView.vue')
const SignInView = () => import('../views/SignInView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATHS.HOME,
      name: ROUTES_PATHS.HOME,
      component: HomeView
    },
    {
      path: ROUTES_PATHS.TIRES,
      name: ROUTES_PATHS.TIRES,
      component: TiresView
    },
    {
      path: ROUTES_PATHS.SIGNUP,
      name: ROUTES_PATHS.SIGNUP,
      component: SignUpView
    },
    {
      path: ROUTES_PATHS.SIGNIN,
      name: ROUTES_PATHS.SIGNIN,
      component: SignInView
    },
    {
      path: ROUTES_PATHS.NOTFOUND,
      name: ROUTES_PATHS.NOTFOUND,
      component: HomeView
    }
  ]
})

export default router
