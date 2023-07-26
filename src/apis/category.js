import { apiHelper } from './../utils/helpers'

export default {
  getCategory () {
    return apiHelper.get('/category')
  }
}
