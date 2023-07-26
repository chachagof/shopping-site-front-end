<script setup>
import { ref } from 'vue'
import cartAPI from './../apis/cart'
import categoryAPI from './../apis/category'
import commodityAPI from './../apis/commodities'
import { useAuthStore } from './../stores/auth'
import { Toast } from './../utils/helpers'
import { cartStore } from './../stores/cart'
import Swal from 'sweetalert2'

defineProps(['commoditiesData'])

const isModalVisible = ref(false)
const isEditModalVisible = ref(false)
const modalData = ref(null)
const editModalData = ref(null)
const { currentUser, isAuthenticated } = useAuthStore()
const { getUserCart } = cartStore()
const name = ref()
const price = ref()
const inventory = ref()
const avatar = ref()
const categories = ref()
const categoryId = ref()
const description = ref()

const showModal = (commodity) => {
  if (!isModalVisible.value) {
    isModalVisible.value = true
    modalData.value = [commodity]
  } else {
    isModalVisible.value = false
  }
}

const showEditModal = async (commodity) => {
  try {
    const category = await categoryAPI.getCategory()
    categories.value = category.data.data
    if (!isEditModalVisible.value) {
      isEditModalVisible.value = true
      editModalData.value = [commodity]
      name.value = editModalData.value[0].name
      price.value = editModalData.value[0].price
      inventory.value = editModalData.value[0].inventory
      avatar.value = editModalData.value[0].avatar
      categoryId.value = editModalData.value[0].categoryId
      description.value = editModalData.value[0].description
    } else {
      isEditModalVisible.value = false
    }
  } catch (err) {
    console.log(err)
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

const editCommodity = async (commodityId) => {
  try {
    if (!name.value || !price.value || !inventory.value || !avatar.value || !description.value) {
      Toast.fire({
        icon: 'warning',
        title: '所有欄位都是必填的!'
      })
      return
    }
    const editData = {
      name: name.value,
      price: price.value,
      inventory: inventory.value,
      avatar: avatar.value,
      categoryId: categoryId.value,
      description: description.value
    }
    const res = await commodityAPI.editCommodity(commodityId, editData)
    if (res) {
      Toast.fire({
        icon: 'success',
        title: '修改商品成功，請重新整理網頁'
      })
      showEditModal()
    }
  } catch (err) {
    console.log(err)
  }
}

const removeCommodity = async (data) => {
  const alert = await Swal.fire({
    icon: 'warning',
    title: '確認刪除此商品?',
    confirmButtonText: '確定',
    showCancelButton: true
  })
  if (alert.isConfirmed) {
    const res = await commodityAPI.removeCommodity(data)
    if (res) {
      Toast.fire({
        icon: 'success',
        title: '刪除商品成功，請重新整理網頁'
      })
    }
  }
}
</script>

<template>
  <div class="commodity-container col-10 d-flex flex-wrap justify-content-center">
    <!-- each commodity -->
    <div class="card col-2 m-3" v-for="commodity in commoditiesData" :key="commodity.id">
      <div class="card-header d-flex justify-content-between">
        <h5>{{commodity.name}}</h5>
        <button v-if="(currentUser.role === 'seller' && commodity.sellerId === currentUser.id)" @click="removeCommodity(commodity.id)"  class="btn btn-danger"><font-awesome-icon icon="trash-can" size="xs" /></button>
      </div>
      <img :src="commodity.avatar" class="card-img-top">
      <div class="card-body">
        <!-- <h5 class="card-title">{{commodity.name}}</h5> -->
        <div class="button-container d-flex justify-content-between">
          <button @click="showModal(commodity)" class="btn btn-outline-success"><font-awesome-icon icon="circle-info" /></button>
          <button v-if="currentUser.role === 'buyer'"  @click="addToCart(commodity.id)" class="btn btn-outline-warning"><font-awesome-icon icon="cart-plus" /></button>
          <button v-if="(currentUser.role === 'seller' && commodity.sellerId === currentUser.id)"  @click="showEditModal(commodity)" class="btn btn-outline-warning"><font-awesome-icon icon="pen-to-square" /></button>
        </div>
      </div>
    </div>
  </div>
  <!-- info modal -->
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
        <p class="card-text mb">庫存數量:{{ modalData[0].inventory }}</p>
        <p class="card-text mb-5">商品價格:{{ modalData[0].price }}</p>
      </div>
      <div class="card-footer text-muted">
        <div class="button-container d-flex justify-content-between">
          <button @click="showModal" class="btn btn-outline-danger">Back   <font-awesome-icon icon="backward" /></button>
          <button v-if="currentUser.roler === 'buyer'" @click="addToCart(modalData[0].id)" class="btn btn-outline-warning">Add  To Cart <font-awesome-icon icon="cart-plus" /></button>
        </div>
      </div>
    </div>
  </div>
  <!-- edit modal -->
  <div v-if="isEditModalVisible" class="modal-container ">
    <div class="card text-center col-4">
      <div class="card-header">
        Create commodity
      </div>
      <div class="card-body ">
        <form class="form-signup" action="/signup" method="POST">
          <div class="form-row mb-3">
            <label class="form-label" for="name">Name</label>
            <input v-model="name" type="text" id="name" name="name" class="form-control" placeholder="Name" required autofocus>
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="price">Price</label>
            <input v-model="price" type="number" id="price" name="price" class="form-control" placeholder="Price" min="0" step="1" required>
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="inventory">Inventory</label>
            <input v-model="inventory" type="number" id="inventory" name="inventory" class="form-control" placeholder="Inventory" min="0" step="1"  required>
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="avatar">Avatar</label>
            <input  v-model="avatar" type="text" id="avatar" name="avatar" class="form-control" placeholder="Avatar" required >
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="category">Category</label>
            <select class="form-select" id="category" name="category" disabled>
              <option v-for="category in categories" :key="category.id" :value="category.id" :selected="category.id === categoryId">{{category.name}}</option>
            </select>
          </div>
          <div class="form-row mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea v-model="description" class="form-control" id="description" rows="3" placeholder="Description"></textarea>
          </div>
        </form>
      </div>
      <div class="card-footer text-muted">
        <div class="button-container d-flex justify-content-between">
          <button @click="showEditModal" class="btn btn-outline-danger">Back   <font-awesome-icon icon="backward" /></button>
          <button @click="editCommodity(editModalData[0].id)" class="btn btn-outline-success">Save <font-awesome-icon icon="square-plus" /></button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
