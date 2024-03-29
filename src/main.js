import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Notifications from '@kyvg/vue3-notification'
import { initializeApp } from 'firebase/app'
import firebaseConfig from './services/firebase'
import '@/services/axios'
import App from './App.vue'
import router from './router'
import './assets/styles/main.sass'

initializeApp(firebaseConfig)

const app = createApp(App)

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import {
  faEye,
  faEyeSlash,
  faImage,
  faPlus,
  faMinus,
  faFilter,
  faRotate,
  faSpinner,
  faArrowRightToBracket,
  faArrowRightFromBracket,
  faXmark,
  faCartShopping,
  faArrowDownWideShort,
  faArrowDownShortWide,
  faHeart as fasHeart
} from '@fortawesome/free-solid-svg-icons'

library.add([
  faEye,
  faEyeSlash,
  faImage,
  faPlus,
  faMinus,
  faFilter,
  faRotate,
  faSpinner,
  faArrowRightToBracket,
  faArrowRightFromBracket,
  faXmark,
  faCartShopping,
  fasHeart,
  faArrowDownWideShort,
  faArrowDownShortWide,
  farHeart,
  faLinkedin
])

app.use(router)
app.use(createPinia())
app.use(Notifications)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
