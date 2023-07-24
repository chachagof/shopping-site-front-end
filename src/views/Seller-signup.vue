<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Nav-bar.vue'
import Signup from '../components/Sign-up.vue'
import authorizationAPI from './../apis/authorization'
import { Toast } from './../utils/helpers'

const roleData = ref([{ role: 'seller' }])
const router = useRouter()

async function sellerData (data) {
  try {
    if (!data.name || !data.account || !data.password || !data.passwordCheck) {
      Toast.fire({
        icon: 'warning',
        title: '請填入所有欄位'
      })
      return
    }
    if (data.password !== data.passwordCheck) {
      Toast.fire({
        icon: 'warning',
        title: '密碼請輸入一致'
      })
      return
    }
    const res = await authorizationAPI.sellerSignup(data)
    if (res.data.status !== 200) {
      throw new Error(res.data.message)
    }
    console.log(res)
    Toast.fire({
      icon: 'success',
      title: '成功完成註冊'
    })
    router.push('/seller/signin')
  } catch (err) {
    Toast.fire({
      icon: 'warning',
      title: '帳號重複'
    })
  }
}
</script>

<template>
  <Navbar @search-submitted="getCommodityData"/>
  <main role="main" class="mt-5 bg-white d-flex flex-column justify-content-center align-items-center">
    <Signup :role="roleData" @form-submitted="sellerData"/>
  </main>
</template>
