import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/Signin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn
    }
  ]
})

export default router
