import Vue from 'vue'
import lazybee from 'vue-lazybee'
import './shared/config/index.js'
import App from './App.vue'

Vue.use(lazybee)
Vue.config.productionTip = false

new Vue({
  ...lazybee.init(),
  render: h => h(App)
}).$mount('#app')
