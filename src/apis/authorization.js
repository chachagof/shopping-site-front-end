import { apiHelper } from './../utils/helpers'

export default {
  buyerSignin ({ account, password }) {
    return apiHelper.post('/buyer/signin', { account, password })
  }
}
