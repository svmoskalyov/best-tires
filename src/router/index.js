import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATHS } from '@/constants'
import { useAuthStore } from '@/stores/auth'

const HomeView = () => import('../views/HomeView.vue')
const TiresView = () => import('../views/TiresView.vue')
const TiresDetails = () => import('../components/TiresListItemDetails.vue')
const FavoritesView = () => import('../views/FavoritesView.vue')
const CartView = () => import('../views/CartView.vue')
const AboutView = () => import('../views/AboutView.vue')
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
      path: ROUTES_PATHS.TIRES_ID,
      name: ROUTES_PATHS.TIRES_ID,
      component: TiresDetails
    },
    {
      path: ROUTES_PATHS.FAVORITES,
      name: ROUTES_PATHS.FAVORITES,
      component: FavoritesView,
      meta: {
        auth: false
      }
    },
    {
      path: ROUTES_PATHS.CART,
      name: ROUTES_PATHS.CART,
      component: CartView,
      meta: {
        auth: false
      }
    },
    {
      path: ROUTES_PATHS.ABOUT,
      name: ROUTES_PATHS.ABOUT,
      component: AboutView,
      meta: {
        auth: false
      }
    },
    {
      path: ROUTES_PATHS.SIGNUP,
      name: ROUTES_PATHS.SIGNUP,
      component: SignUpView,
      meta: {
        auth: false
      }
    },
    {
      path: ROUTES_PATHS.SIGNIN,
      name: ROUTES_PATHS.SIGNIN,
      component: SignInView,
      meta: {
        auth: false
      }
    },
    {
      path: ROUTES_PATHS.NOTFOUND,
      name: ROUTES_PATHS.NOTFOUND,
      component: HomeView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.meta.auth && !authStore.userInfo.token) {
    next(ROUTES_PATHS.SIGNIN)
  } else {
    next()
  }
})

export default router
