import Vue from 'vue'
import lazybee from './shared/config/index.js'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  ...lazybee.init(),
  render: h => h(App)
}).$mount('#app')
