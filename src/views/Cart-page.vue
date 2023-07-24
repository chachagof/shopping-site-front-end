<script setup>
import { ref, computed, onMounted } from 'vue'
import Navbar from '../components/Nav-bar.vue'
import cartAPI from '../apis/cart'

const cartData = ref([])

const getCartData = async () => {
  try {
    const res = await cartAPI.getCart()
    cartData.value = res.data.data
  } catch (err) {
    console.log(err)
  }
}

const increase = (amount) => {
  amount.value++
}
const decrease = (amount) => {
  if (amount.value > 1)amount.value--
}
const totalPrice = computed(() => {
  let total = 0
  for (const commodity of cartData.value) {
    total += commodity.amount * commodity.Commodity.price
  }
  return total
})

const totalAmount = computed(() => {
  let total = 0
  for (const commodity of cartData.value) {
    total += commodity.amount
  }
  return total
})

onMounted(() => {
  getCartData()
})
</script>

<template>
  <Navbar @search-submitted="getCommodityData"/>
  <main role="main" class="mt-5 bg-white d-flex flex-column justify-content-center align-items-center">
    <div class="card cart-container col-10">
      <div class="card-header">Shop name</div>
      <div v-for="(commodity,index) in cartData" :key="index" class="card-body ">
        <div class="cart-commodity d-flex border-bottom border-secondary p-3">
          <div class="commodity-avatar commodity col-2">
            <img :src="commodity.Commodity.avatar">
          </div>
          <div class="commodity-description commodity col-3">
            {{ commodity.Commodity.description }}
          </div>
          <div class="commodity-price commodity col-2">
            {{ commodity.Commodity.price }}
          </div>
          <div class="commodity-amount commodity col-3">
            <div class="input-group mb-3">
              <button  @click="decrease(commodity.amount)" class="btn btn-outline-secondary" type="button" id="button-addon1">
                <font-awesome-icon icon="circle-minus" />
              </button>
              <div class="commodity-amount form-control text-center">{{ commodity.amount }}</div>
              <button @click="increase(commodity.amount)" class="btn btn-outline-secondary" type="button" id="button-addon1">
                <font-awesome-icon icon="circle-plus" />
              </button>
            </div>
          </div>
          <div class="commodity-total-price commodity col-2">
            {{ commodity.amount * commodity.Commodity.price }}
          </div>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-end">
        <div class="total-price d-flex align-items-center">
          <div class="total-price-title">Total Price</div>
          <div class="total-price-price bg-white border border-dark rounded m-2 p-1"> ${{ totalPrice }}</div>
        </div>
        <div class="total-amount d-flex align-items-center">
          <div class="total-amount-title">Total Amount</div>
          <div class="total-amount-amount bg-white border border-dark rounded m-2 p-1"> {{ totalAmount }} </div>
        </div>
        <button type="button" class="btn btn-success">
          Buy Now
          <font-awesome-icon icon="cash-register" />
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
  /* non-display arrow in number input */
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .commodity{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img{
    width: 150px;
    height: 120px;
  }
</style>
