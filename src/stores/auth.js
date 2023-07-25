import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    currentUser: { },
    isAuthenticated: false
  }),
  getters: {
  },
  actions: {
    login (data) {
      this.currentUser = { ...data }
      this.isAuthenticated = true
    },
    logout () {
    }
  },
  persist: {
    enabled: true
  }
})
