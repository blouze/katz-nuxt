import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
// internal icons
import {
  faUser,
  faEnvelope,
  faExclamationTriangle,
  faLock,
  faSignOutAlt,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faUser,
  faEnvelope,
  faExclamationTriangle,
  faLock,
  faSignOutAlt,
  faShoppingCart
)

Vue.component('vue-fontawesome', FontAwesomeIcon)
