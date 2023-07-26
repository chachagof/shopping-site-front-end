import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Home from '../views/Home-page.vue'
import BuyerSignin from '../views/Buyer-signin.vue'
import BuyerSignup from '../views/Buyer-signup.vue'
import SellerSignIn from '../views/Seller-signin.vue'
import SellerSignup from '../views/Seller-signup.vue'
import ConfirmRole from '../views/Confirm-role.vue'
import Cart from '../views/Cart-page.vue'
import Shop from '../views/Shop-page.vue'
import NotFound from '../views/Not-found.vue'
import Create from '..//views/Create-commodity.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/buyer/signin',
      name: 'buyer-signin',
      component: BuyerSignin
    },
    {
      path: '/buyer/signup',
      name: 'buyer-signup',
      component: BuyerSignup
    },
    {
      path: '/seller/signin',
      name: 'seller-signin',
      component: SellerSignIn
    },
    {
      path: '/seller/signup',
      name: 'seller-signup',
      component: SellerSignup
    },
    {
      path: '/ConfirmRole',
      name: 'Confirm-role',
      component: ConfirmRole
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      meta: { requiresAuth: true }
    },
    {
      path: '/shop/:sellerId',
      name: 'shop',
      component: Shop,
      meta: { requiresAuth: true }
    },
    {
      path: '/create',
      name: 'create',
      component: Create,
      meta: { requiresAuth: true }
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const isLoggedIn = useAuthStore().isAuthenticated
    if (isLoggedIn) {
      next()
    } else {
      next('/ConfirmRole')
    }
  } else {
    next()
  }
})

export default router
