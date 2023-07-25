<script setup>
import { ref } from 'vue'
import cartAPI from './../apis/cart'
import { useAuthStore } from './../stores/auth'
import { Toast } from './../utils/helpers'
import { cartStore } from './../stores/cart'

defineProps(['commoditiesData'])

const isModalVisible = ref(false)
const modalData = ref(null)
const { currentUser, isAuthenticated } = useAuthStore()
const { getUserCart } = cartStore()

const showModal = (commodity) => {
  if (!isModalVisible.value) {
    isModalVisible.value = true
    modalData.value = [commodity]
  } else {
    isModalVisible.value = false
  }
}

const addToCart = async (commodityId) => {
  try {
    if (!isAuthenticated) {
      Toast.fire({
        icon: 'warning',
        title: '請先登入才能使用'
      })
      return
    }
    if (currentUser.role === 'seller') {
      Toast.fire({
        icon: 'warning',
        title: '僅供買家使用'
      })
      return
    }
    const res = await cartAPI.addToCart(commodityId)
    if (res.data.status !== 200) {
      throw new Error(res.data.message)
    }
    Toast.fire({
      icon: 'success',
      title: '已加入您的購物車'
    })
    const cart = await cartAPI.getCart()
    await getUserCart(cart.data.data)
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <div class="commodity-container col-10 d-flex flex-wrap justify-content-center">
    <!-- each commodity -->
    <div class="card col-2 m-3" v-for="commodity in commoditiesData" :key="commodity.id">
      <img :src="commodity.avatar" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{commodity.name}}</h5>
        <div class="button-container d-flex justify-content-between">
          <button @click="showModal(commodity)" class="btn btn-outline-success"><font-awesome-icon icon="circle-info" /></button>
          <button @click="addToCart(commodity.id)" class="btn btn-outline-warning"><font-awesome-icon icon="cart-plus" /></button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-container" v-if="isModalVisible">
    <div class="card text-center col-4" >
      <div class="card-header">
        <p class="text-center m-1 fs-4">
          {{ modalData[0].name }}
        </p>
      </div>
      <div class="card-body">
        <img :src="modalData[0].avatar">
        <p class="card-text mt-5">商品描述:{{ modalData[0].description }}</p>
        <p class="card-text mb-5">商品價格:{{ modalData[0].price }}</p>
      </div>
      <div class="card-footer text-muted">
        <div class="button-container d-flex justify-content-between">
          <button @click="showModal" class="btn btn-outline-danger">Back   <font-awesome-icon icon="backward" /></button>
          <button @click="addToCart(modalData[0].id)" class="btn btn-outline-warning">Add  To Cart <font-awesome-icon icon="cart-plus" /></button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
</style>
