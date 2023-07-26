import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCartShopping, faCartPlus, faRightFromBracket, faCircleInfo, faCirclePlus, faCircleMinus, faCashRegister, faHouse, faBackward, faRightToBracket, faSquarePlus, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import persist from 'pinia-plugin-persist'

library.add(faCartShopping, faCartPlus, faRightFromBracket, faCircleInfo, faCirclePlus, faCircleMinus, faCashRegister, faHouse, faBackward, faRightToBracket, faSquarePlus, faPenToSquare, faTrashCan)

const app = createApp(App)
const pinia = createPinia()
pinia.use(persist)

app.use(router)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
