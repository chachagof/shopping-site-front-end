<script setup>
import { ref, computed } from 'vue'
const dummyData = [
  {
    amount: 3,
    commodityId: 2,
    cartId: 1,
    createdAt: '2023-07-19T12:16:02.000Z',
    updatedAt: '2023-07-19T12:26:15.000Z',
    Commodity: {
      id: 2,
      name: 'aaa',
      description: 'Good',
      price: 100,
      inventory: 10,
      avatar: 'https://fakeimg.pl/150x120/',
      sellerId: 1,
      categoryId: 1,
      createdAt: '2023-07-19T07:59:43.000Z',
      updatedAt: '2023-07-19T07:59:43.000Z'
    }
  },
  {
    amount: 2,
    commodityId: 1,
    cartId: 1,
    createdAt: '2023-07-19T12:30:28.000Z',
    updatedAt: '2023-07-19T12:31:19.000Z',
    Commodity: {
      id: 1,
      name: 'bbb',
      description: 'Good',
      price: 696,
      inventory: 10,
      avatar: 'https://fakeimg.pl/150x120/',
      sellerId: 1,
      categoryId: 1,
      createdAt: '2023-07-19T07:59:32.000Z',
      updatedAt: '2023-07-19T07:59:32.000Z'
    }
  },
  {
    amount: 2,
    commodityId: 3,
    cartId: 1,
    createdAt: '2023-07-19T12:31:24.000Z',
    updatedAt: '2023-07-23T08:51:17.000Z',
    Commodity: {
      id: 3,
      name: 'ccc',
      description: 'Good',
      price: 9999,
      inventory: 10,
      avatar: 'https://fakeimg.pl/150x120/',
      sellerId: 1,
      categoryId: 1,
      createdAt: '2023-07-19T07:59:52.000Z',
      updatedAt: '2023-07-19T07:59:52.000Z'
    }
  }
]
dummyData.forEach((commodity) => {
  commodity.amount = ref(commodity.amount)
})
const increase = (amount) => {
  amount.value++
}
const decrease = (amount) => {
  if(amount.value > 1)amount.value--
}
const totalPrice = computed(() => {
  let total = 0
  for (const commodity of dummyData) {
    total += commodity.amount.value * commodity.Commodity.price
  }
  return total
})

const totalAmount = computed(() => {
  let total = 0
  for (const commodity of dummyData) {
    total += commodity.amount.value
  }
  return total
})

</script>

<template>
  <div class="card cart-container col-10">
    <div class="card-header">Shop name</div>
    <div v-for="(commodity,index) in dummyData" :key="index" class="card-body ">
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
          {{ commodity.amount.value * commodity.Commodity.price }}
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
