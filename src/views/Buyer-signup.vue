<script setup>
import { ref } from 'vue'
import Signup from '../components/Sign-up.vue'

const roleData = ref([{ role: 'buyer' }])

const buyerData = (data) => {
  console.log(data)
}
</script>

<template>
  <Signup :role="roleData" @form-submitted="buyerData"/>
</template>
