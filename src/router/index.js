import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/Sign-In.vue'
import SignUp from '../views/Sign-Up.vue'

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
    }
  ]
})

export default router
