<script setup>
// import { ref, computed, onMounted } from 'vue'
import Navbar from '../components/Nav-bar.vue'
import cartAPI from '../apis/cart'
import { cartStore } from './../stores/cart'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()
const { userCart, getUserCart, increase, decrease, totalPrice, totalAmount, cleanCart, getAmount, getPrice } = cartStore()

const getCartData = async () => {
  try {
    const res = await cartAPI.getCart()
    await getUserCart(res.data.data)
  } catch (err) {
    console.log(err)
  }
}
const updateData = []
const checkCart = async () => {
  Object.values(userCart).forEach(item => {
    updateData.push({ id: item.Commodity.id, inventory: (item.Commodity.inventory - item.amount) })
  })
  const alert = await Swal.fire({
    icon: 'warning',
    title: '確認結帳?結帳後購物車將清除!',
    confirmButtonText: '確定',
    showCancelButton: true
  })
  if (alert.isConfirmed) {
    await cartAPI.checkCart({ updateData })
    await cleanCart()
    router.push('/')
  }
}
getCartData()
</script>

<template>
  <Navbar />
  <main role="main" class="mt-5 bg-white d-flex flex-column justify-content-center align-items-center">
    <div class="card cart-container col-10">
      <div class="card-header">Shop name</div>
      <div v-for="(commodity,index) in userCart" :key="index" class="card-body ">
        <div class="cart-commodity d-flex border-bottom border-secondary p-3">
          <div class="commodity-avatar commodity col-2">
            <img :src="commodity.Commodity.avatar">
          </div>
          <div class="commodity-description commodity col-3">
            <p><strong>{{ commodity.Commodity.name }}</strong><br>{{ commodity.Commodity.description }}</p>
          </div>
          <div class="commodity-price commodity col-2">
            {{ commodity.Commodity.price }}
          </div>
          <div class="commodity-amount commodity col-3">
            <div class="input-group mb-3">
              <button  @click="decrease(commodity.commodityId)" class="btn btn-outline-secondary" type="button" id="button-addon1">
                <font-awesome-icon icon="circle-minus" />
              </button>
              <div class="commodity-amount form-control text-center">{{ getAmount(commodity.commodityId) }}</div>
              <button @click="increase(commodity.commodityId)" class="btn btn-outline-secondary" type="button" id="button-addon1">
                <font-awesome-icon icon="circle-plus" />
              </button>
            </div>
          </div>
          <div class="commodity-total-price commodity col-2">
            {{ getPrice(commodity.commodityId) }}
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
        <button @click="checkCart" type="button" class="btn btn-success">
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
