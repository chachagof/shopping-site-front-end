import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCommodities (condition) {
    const searchParams = new URLSearchParams(condition)
    return apiHelper.get(`/commodities?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
