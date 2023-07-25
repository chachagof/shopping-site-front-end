<script setup>
import { ref } from 'vue'
import { useAuthStore } from './../stores/auth'
import Swal from 'sweetalert2'
import router from '../router'

const commodity = ref('')
const shop = ref('')
const category = ref('')
const price = ref('')
const lowPrice = ref('')
const highPrice = ref('')
const searchOption = ref('')
const emit = defineEmits(['search-submitted'])
const { showHomePage } = defineProps(['showHomePage'])
const showComponent = showHomePage !== undefined
const { currentUser, isAuthenticated, logout } = useAuthStore()

const handleSubmit = () => {
  // 加入資料
  const searchData = {
    commodity: commodity.value,
    shop: shop.value,
    category: category.value,
    price: price.value,
    lowPrice: lowPrice.value,
    highPrice: highPrice.value,
    searchOption: searchOption.value
  }
  emit('search-submitted', searchData)
  // 清空資料
  commodity.value = ''
  shop.value = ''
  category.value = ''
  price.value = ''
  lowPrice.value = ''
  highPrice.value = ''
  searchOption.value = ''
}

const userLogout = async () => {
  const alert = await Swal.fire({
    icon: 'warning',
    title: '確認登出?',
    confirmButtonText: '確定',
    showCancelButton: true
  })
  if (alert.isConfirmed) {
    logout()
    router.go()
    router.push('/')
  }
}

</script>

<template>
  <nav class="navbar navbar-light bg-light p-3">
    <!-- logo -->
    <div class="logo-container">
      <RouterLink to="/" class="navbar-brand">Shopping site</RouterLink>
    </div>
    <!-- searchbar -->
    <div v-if="showComponent" class="searchbar-container col-6">
      <div class="searchbar">
        <form @submit.prevent="handleSubmit" class="d-flex">
          <input v-model="searchOption" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      <div class="search-category d-flex align-items-center justify-content-between mt-2">
        <div class="form-check">
          <input v-model="commodity" class="form-check-input" type="radio" name="flexRadioDefault" id="commodity">
          <label class="form-check-label" for="commodity">
            commodity
          </label>
        </div>
        <div class="form-check">
          <input v-model="shop" class="form-check-input" type="radio" name="flexRadioDefault" id="shop" >
          <label class="form-check-label" for="shop">
            shop
          </label>
        </div>
        <div class="form-check">
          <input v-model="category" class="form-check-input" type="radio" name="flexRadioDefault" id="category">
          <label class="form-check-label" for="category">
            category
          </label>
        </div>
        <div class="form-check d-flex align-items-center ">
          <input v-model="price" class="form-check-input" type="radio" name="flexRadioDefault" id="above-price">
          <label class="form-check-label me-2 ms-2" for="above-price">
            price
          </label>
          <div class="price-range d-flex align-items-center  col-6">
            <label class="form-check-label" for="minPrice"></label>
            <input v-model="lowPrice" class="form-control me-2" type="number" id="minPrice" name="minPrice" step="1" min="0">
            <label class="form-check-label  me-2" for="maxPrice">to</label>
            <input v-model="highPrice" class="form-control" type="number" id="maxPrice" name="maxPrice" step="1" min="0">
          </div>
        </div>
      </div>
    </div>
    <!-- button -->
    <div class="buttons-container">
      <router-link v-if="currentUser.role === 'buyer'" to="/cart" class="btn btn-outline-warning me-3">
          Cart<font-awesome-icon icon="cart-shopping" />
      </router-link>
      <router-link v-if="currentUser.role === 'seller'" :to="'/seller/'+currentUser.id" class="btn btn-outline-warning me-3">
          shop<font-awesome-icon icon="cart-shopping" />
      </router-link>
      <router-link  v-if="!isAuthenticated" to="/confirmRole" class="btn btn-outline-success">
        Login<font-awesome-icon icon="right-to-bracket" />
      </router-link>
      <button v-if="isAuthenticated" @click="userLogout" type="button" class="btn btn-outline-danger">
        Logout<font-awesome-icon icon="right-from-bracket" />
      </button>
    </div>
  </nav>
</template>
