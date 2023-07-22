<script setup>
import { ref } from 'vue'
import Commodity from '../components/Show-commodity.vue'

const dummyData = ref([
  [
    {
      id: 1,
      name: 'bbb',
      description: 'Good',
      price: 696,
      inventory: 10,
      avatar: 'https://fakeimg.pl/200x200/',
      sellerId: 1,
      categoryId: 1,
      createdAt: '2023-07-19T07:59:32.000Z',
      updatedAt: '2023-07-19T07:59:32.000Z'
    },
    {
      id: 2,
      name: 'aaa',
      description: 'Good',
      price: 100,
      inventory: 10,
      avatar: 'https://fakeimg.pl/200x200/',
      sellerId: 1,
      categoryId: 1,
      createdAt: '2023-07-19T07:59:43.000Z',
      updatedAt: '2023-07-19T07:59:43.000Z'
    },
    {
      id: 3,
      name: 'ccc',
      description: '我愛阿莉',
      price: 9999,
      inventory: 10,
      avatar: 'https://fakeimg.pl/200x200/',
      sellerId: 1,
      categoryId: 1,
      createdAt: '2023-07-19T07:59:52.000Z',
      updatedAt: '2023-07-19T07:59:52.000Z'
    }],
  [{
    id: 1,
    name: 'aaaa',
    account: 'aaaa',
    role: 'seller',
    avatar: 'https://images.dog.ceo/breeds/saluki/n02091831_2094.jpg',
    description: 'I am a good seller',
    createdAt: '2023-07-19T07:58:41.000Z',
    updatedAt: '2023-07-19T07:58:41.000Z'
  }]
])

</script>

<template>
  <div class="shop-container border rounded col-10  p-5 mb-3">
    <div class="shop-profile d-flex">
      <div class="shop-avatar-container d-flex justify-content-center align-items-center col-3 ">
        <img :src="dummyData[1][0].avatar" class="img-fluid img-thumbnail shop-avatar">
      </div>
      <div class="shop-description d-flex align-items-center col-9">
        <p>{{dummyData[1][0].description}}</p>
      </div>
    </div>
    <div class="shop-commodities"></div>
  </div>
  <Commodity :commoditiesData="dummyData[0]" />
</template>

<style scoped>
.shop-avatar {
  max-width: 250px;
}
</style>
