<script setup>
import Commodity from '../components/Show-commodity.vue'
</script>

<template>
  <div class="shop-container border rounded col-10  p-5 mb-3">
    <div class="shop-profile d-flex">
      <div class="shop-avatar d-flex justify-content-center align-items-center col-3 ">
        <img src="https://fakeimg.pl/200x200/" >
      </div>
      <div class="shop-description d-flex align-items-center col-9">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at mi et metus dictum malesuada ac sit amet mauris. Suspendisse pharetra tincidunt odio, sit amet commodo velit viverra id. Nulla tristique rhoncus orci, vel vehicula arcu venenatis id. Fusce ut.</p>
      </div>
    </div>
    <div class="shop-commodities"></div>
  </div>
  <Commodity/>
</template>
