import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home-page.vue'
import BuyerSignin from '../views/Buyer-signin.vue'
import BuyerSignup from '../views/Buyer-signup.vue'
import SellerSignIn from '../views/Seller-signin.vue'
import SellerSignup from '../views/Seller-signup.vue'
import ConfirmRole from '../views/Confirm-role.vue'
import Cart from '../views/Cart-page.vue'
import Shop from '../views/Shop-page.vue'
import NotFound from '../views/Not-found.vue'

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
      component: Cart
    },
    {
      path: '/shop/:sellerId',
      name: 'shop',
      component: Shop
    },
    {
      path: '/:catchAll(.*)',
      component: NotFound
    }
  ]
})

export default router
