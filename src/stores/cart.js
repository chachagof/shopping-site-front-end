import { defineStore } from 'pinia'
import { Toast } from '../utils/helpers'
import { ref, computed } from 'vue'

export const cartStore = defineStore('cart', {
  state: () => ({
    userCart: ref({})
  }),
  getters: {
    totalPrice: (state) => {
      return computed(() => {
        let total = 0
        Object.values(state.userCart).forEach(item => {
          total += item.Commodity.price * item.amount
        })
        return total
      })
    },
    totalAmount: (state) => {
      return computed(() => {
        let total = 0
        Object.values(state.userCart).forEach(item => {
          total += item.amount
        })
        return total
      })
    },
    getAmount: (state) => (id) => {
      const items = Object.values(state.userCart).find(item => item.commodityId === id)
      return items.amount
    },
    getPrice: (state) => (id) => {
      const items = Object.values(state.userCart).find(item => item.commodityId === id)
      return items.amount * items.Commodity.price
    }
  },
  actions: {
    getUserCart (data) {
      this.userCart = {
        ...this.userCart,
        ...data
      }
    },
    increase (commodityId) {
      const item = Object.values(this.userCart).find(i => i.commodityId === commodityId)
      const inventory = item.Commodity.inventory
      const amount = item.amount
      if (amount < inventory) {
        item.amount++
      } else {
        Toast.fire({
          icon: 'warning',
          title: '已超過商品上限'
        })
      }
    },
    decrease (commodityId) {
      const item = Object.values(this.userCart).find(i => i.commodityId === commodityId)
      const amount = item.amount
      if (amount > 0) {
        item.amount--
      }
    },
    cleanCart () {
      this.userCart = {}
    }
  },
  persist: {
    enabled: true
  }
})
