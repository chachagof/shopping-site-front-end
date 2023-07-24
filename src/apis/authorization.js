import { apiHelper } from './../utils/helpers'

export default {
  buyerSignin ({ account, password }) {
    return apiHelper.post('/buyer/signin', { account, password })
  },
  sellerSignin ({ account, password }) {
    return apiHelper.post('/seller/signin', { account, password })
  }
}
