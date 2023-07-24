import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCart () {
    return apiHelper.get('/cart', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
