<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '../components/Nav-bar.vue'
import Commodity from '../components/Show-commodity.vue'
import shopAPI from '../apis/shop'

const shopData = ref([])
const seller = ref([])
const route = useRoute()

const getShopData = async () => {
  try {
    const params = route.params
    const res = await shopAPI.getShop(params)
    shopData.value = res.data.Commodities
    seller.value = res.data
  } catch (err) {
    console.log(err)
  }
}

getShopData()

</script>

<template>
  <Navbar />
    <main
      role="main"
      class="mt-5 bg-white d-flex flex-column justify-content-center align-items-center"
    >
    <div class="shop-container border rounded col-10  p-5 mb-3">
    <div class="shop-profile d-flex">
      <div class="shop-avatar-container d-flex justify-content-center align-items-center col-3 ">
        <img :src="seller.avatar" class="img-fluid img-thumbnail shop-avatar">
      </div>
      <div class="shop-description d-flex align-items-center col-9">
        <p>{{seller.description}}</p>
      </div>
    </div>
    <div class="shop-commodities"></div>
  </div>
  <Commodity :commoditiesData="shopData" />
    </main>
</template>

<style scoped>
.shop-avatar {
  max-width: 250px;
}
</style>
