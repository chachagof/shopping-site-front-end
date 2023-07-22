<script setup>
import { ref } from 'vue'
import Signup from '../components/Sign-up.vue'

const roleData = ref([{ role: 'seller' }])

const sellerData = (data) => {
  console.log(data)
}
</script>

<template>
  <Signup :role="roleData" @form-submitted="sellerData"/>
</template>
