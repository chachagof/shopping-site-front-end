import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getShop (params) {
    // const searchParams = new URLSearchParams(condition)
    return apiHelper.get(`/seller/${params.sellerId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}