import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home-page.vue'
import SignIn from '../views/Sign-In.vue'
import SignUp from '../views/Sign-up.vue'
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
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: SignUp
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
      path: '/shop',
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
