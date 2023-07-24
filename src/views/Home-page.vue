<script setup>
import { ref } from 'vue'
import Navbar from '../components/Nav-bar.vue'
import Commodity from '../components/Show-commodity.vue'
import commoditiesAPI from '../apis/commodities'

const commodityData = ref([])
const getCommodityData = async (data) => {
  try {
    const condition = {}
    if (data) {
      if (data.commodity)condition.name = data.searchOption
      if (data.category)condition.category = data.searchOption
      if (data.shop)condition.seller = data.searchOption
      if (data.price)condition.price = `${data.lowPrice},${data.highPrice}`
    }
    console.log(data)
    console.log(condition)
    const res = await commoditiesAPI.getCommodities(condition)
    commodityData.value = res.data.data
  } catch (err) {
    console.log(err)
  }
}

getCommodityData()
</script>

<template>
  <Navbar @search-submitted="getCommodityData"/>
    <main
      role="main"
      class="mt-5 bg-white d-flex flex-column justify-content-center align-items-center"
    >
    <Commodity :commoditiesData="commodityData"/>
    </main>
</template>
