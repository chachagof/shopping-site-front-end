<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Nav-bar.vue'
</script>

<template>
  <div class="shopping-site">
    <Navbar/>
    <main
      role="main"
      class="mt-5 bg-white d-flex flex-column justify-content-center align-items-center"
    >
    <RouterView/>
    </main>
  </div>
</template>

<style>
</style>
