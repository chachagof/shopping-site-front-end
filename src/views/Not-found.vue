<script setup>
import Navbar from '../components/Nav-bar.vue'
</script>

<template>
  <Navbar/>
  <main
      role="main"
      class="mt-5 bg-white d-flex flex-column justify-content-center align-items-center"
    >
    <div class="not-found-container">
    <h2>404 NOT FOUND</h2>
    <p>抱歉!此頁面出現了些問題<br>你可以...</P>
    <router-link to="/" class="btn btn-primary">回首頁<i class="fa-solid fa-house"></i></router-link>
  </div>
  </main>
</template>
