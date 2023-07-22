<script setup>
import { ref } from 'vue'
import Commodity from '../components/Show-commodity.vue'
const dummyData = ref([
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
  }
])
</script>

<template>
  <Commodity :commoditiesData="dummyData"/>
</template>
