import Vue from 'vue'
// import vue router
import router from '@/shared/lazybee/vue-router'
// import store
import store from '@/shared/lazybee/vuex'
// import i18n
import i18n from '@/shared/lazybee/vue-i18n'

// element-ui
import ElementUI from 'element-ui'
// particles.js
import 'particles.js/particles'
// v-click-outside-x
import * as vClickOutside from 'v-click-outside-x'

// normalize.css - A modern alternative to CSS resets
import 'normalize.css/normalize.css'
// styles
import '@/shared/styles/index.scss'

// entry app
import App from './App.vue'

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.use(vClickOutside)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
