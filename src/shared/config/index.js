import Vue from 'vue'
import router from '@/shared/lazybee/vue-router'
import store from '@/shared/lazybee/vuex'
import i18n from '@/shared/lazybee/vue-i18n'
// normalize.css - A modern alternative to CSS resets
import 'normalize.css/normalize.css'
// element-ui
import ElementUI from 'element-ui'
import './element-ui/theme/index.css'
// particles.js
import 'particles.js/particles'
// styles
import '../styles/index.scss'

Vue.use(ElementUI)

export default {
  router,
  store,
  i18n
}
