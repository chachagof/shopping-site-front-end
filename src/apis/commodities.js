import { apiHelper } from './../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
  getCommodities (condition) {
    const searchParams = new URLSearchParams(condition)
    return apiHelper.get(`/commodities?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  editCommodity (commodityId, data) {
    return apiHelper.put(`/commodity/${commodityId}`, data, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  createCommodity (data) {
    return apiHelper.post('/commodity/', data, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  removeCommodity (commodityId) {
    return apiHelper.delete(`/commodity/${commodityId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
