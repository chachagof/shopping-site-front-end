import { apiHelper } from './../utils/helpers'

export default {
  buyerSignin ({ account, password }) {
    return apiHelper.post('/buyer/signin', { account, password })
  },
  buyerSignup ({ name, account, password, passwordCheck }) {
    return apiHelper.post('/buyer/signup', { name, account, password, passwordCheck })
  },
  sellerSignin ({ account, password }) {
    return apiHelper.post('/seller/signin', { account, password })
  },
  sellerSignup ({ name, account, password, passwordCheck }) {
    return apiHelper.post('/seller/signup', { name, account, password, passwordCheck })
  }
}
