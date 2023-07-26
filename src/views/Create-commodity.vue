<script setup>
import { ref } from 'vue'
import { useAuthStore } from './../stores/auth'
import { useRouter } from 'vue-router'
import { Toast } from '../utils/helpers'
import Navbar from '../components/Nav-bar.vue'
import categoryAPI from './../apis/category'
import commodityAPI from './../apis/commodities'

const { currentUser } = useAuthStore()
const name = ref('')
const price = ref('')
const inventory = ref('')
const avatar = ref('')
const categories = ref('')
const categoryId = ref('')
const description = ref('')
const router = useRouter()

const getCategory = async () => {
  const category = await categoryAPI.getCategory()
  categories.value = category.data.data
}

const createCommodity = async () => {
  if (!name.value || !price.value || !inventory.value || !avatar.value || !description.value) {
    Toast.fire({
      icon: 'warning',
      title: '所有欄位都是必填的!'
    })
    return
  }
  const createData = {
    name: name.value,
    price: price.value,
    inventory: inventory.value,
    avatar: avatar.value,
    categoryId: categoryId.value,
    description: description.value
  }
  console.log(createData)
  const res = await commodityAPI.createCommodity(createData)
  if (res) {
    router.go(-1)
    Toast.fire({
      icon: 'success',
      title: '新增商品成功'
    })
  }
}

const goBack = () => {
  router.go(-1)
}
getCategory()

</script>

<template>
  <Navbar />
  <main role="main" class="mt-5 mb-5 bg-white d-flex flex-column justify-content-center align-items-center ">
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
            <input v-model="price" type="number" id="price" name="price" class="form-control" placeholder="Price" required autofocus>
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="inventory">Inventory</label>
            <input v-model="inventory" type="number" id="inventory" name="inventory" class="form-control" placeholder="Inventory" required autofocus>
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="avatar">Avatar</label>
            <input v-model="avatar" type="url" id="avatar" name="avatar" class="form-control" placeholder="Avatar" required autofocus>
          </div>
          <div class="form-row mb-3">
            <label class="form-label" for="category">Category</label>
            <select v-model="categoryId"  class="form-select" id="category" name="category" >
              <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
            </select>
          </div>
          <div class="form-row mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea  v-model="description" class="form-control" id="description" rows="3" placeholder="Description"></textarea>
          </div>
        </form>
      </div>
      <div class="card-footer text-muted">
        <div class="button-container d-flex justify-content-between">
          <button @click="goBack" class="btn btn-outline-danger">Back   <font-awesome-icon icon="backward" /></button>
          <button @click="createCommodity" class="btn btn-outline-success">Save <font-awesome-icon icon="square-plus" /></button>
        </div>
      </div>
    </div>
  </main>
</template>
