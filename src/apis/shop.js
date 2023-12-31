import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getShop (params) {
    return apiHelper.get(`/seller/${params.sellerId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
