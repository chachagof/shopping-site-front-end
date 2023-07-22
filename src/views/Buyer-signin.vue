<script setup>
import { ref } from 'vue'
import SignIn from '../components/Sign-In.vue'

const roleData = ref([{ role: 'buyer' }])

const buyerData = (data) => {
  console.log(data)
}
</script>

<template>
  <SignIn :role="roleData" @form-submitted="buyerData"/>
</template>
