<script setup>
import Navbar from '../components/Nav-bar.vue'
</script>

<template>
  <Navbar @search-submitted="getCommodityData"/>
  <main role="main" class="mt-5 bg-white d-flex flex-column justify-content-center align-items-center">
    <div class="confirm-role">
    <RouterLink to="/buyer/signin">
      <div class="btn btn-primary me-5">Buyer</div>
    </RouterLink>
    <RouterLink to="/seller/signin">
      <div class="btn btn-primary">Seller</div>
    </RouterLink>
  </div>
  </main>
</template>

<style scoped>
  .btn {
    height: 200px;
    width: 200px;
    font-size: 3em;
    line-height:180px;
    text-align: center;
  }
</style>
