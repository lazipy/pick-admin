import Vue from 'vue'
import router from '@/shared/lazybee/vue-router'
import store from '@/shared/lazybee/vuex'
import i18n from '@/shared/lazybee/vue-i18n'
// normalize.css - A modern alternative to CSS resets
import 'normalize.css/normalize.css'
// element-ui
import ElementUI from 'element-ui'
import '../../../public/4C70E8/index.css'
// particles.js
import 'particles.js/particles'
// v-click-outside-x
import * as vClickOutside from 'v-click-outside-x'
// styles
import '../styles/index.scss'
// theme
import { changeTheme } from '../utils/global'

Vue.use(ElementUI)
Vue.use(vClickOutside)

changeTheme(store.state.application.theme)

export default {
  router,
  store,
  i18n
}
