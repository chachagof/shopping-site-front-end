<script setup>
import { ref } from 'vue'
import SignIn from '../components/Sign-In.vue'

const roleData = ref([{ role: 'seller' }])

const sellerData = (data) => {
  console.log(data)
}
</script>

<template>
  <SignIn :role="roleData" @form-submitted="sellerData"/>
</template>
