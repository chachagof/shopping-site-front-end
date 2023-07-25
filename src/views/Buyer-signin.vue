<script setup>
import { ref } from 'vue'
import SignIn from '../components/Sign-In.vue'
import Navbar from '../components/Nav-bar.vue'
import authorizationAPI from './../apis/authorization'
import { useRouter } from 'vue-router'
import { Toast } from './../utils/helpers'
import { useAuthStore } from './../stores/auth'

const roleData = ref([{ role: 'buyer' }])
const { login } = useAuthStore()
const router = useRouter()

async function buyerData (data) {
  try {
    if (!data.account || !data.password) {
      Toast.fire({
        icon: 'warning',
        title: '請填入 account 和 password'
      })
      return
    }
    const res = await authorizationAPI.buyerSignin(data)
    if (res.data.status !== 200) {
      throw new Error(res.data.message)
    }
    localStorage.setItem('token', res.data.token)
    login(res.data.user)
    router.push('/')
  } catch (err) {
    Toast.fire({
      icon: 'warning',
      title: '請確認您輸入了正確的帳號密碼'
    })
  }
}
</script>

<template>
  <Navbar @search-submitted="getCommodityData"/>
  <main role="main" class="mt-5 bg-white d-flex flex-column justify-content-center align-items-center">
    <SignIn :role="roleData" @form-submitted="buyerData"/>
  </main>
</template>
