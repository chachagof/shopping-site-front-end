import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/Sign-In.vue'
import SignUp from '../views/Sign-up.vue'
import ConfirmRole from '../views/Confirm-role.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    }
  ]
})

export default router
