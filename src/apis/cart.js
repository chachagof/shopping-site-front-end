import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCart () {
    return apiHelper.get('/cart', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  addToCart (commodityId) {
    return apiHelper.post(`/cart/${commodityId}`, null, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  checkCart (updateData) {
    return apiHelper.put('/cart', updateData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
