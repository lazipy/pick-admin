import Vue from 'vue'
import App from './App.vue'
import lazybee from 'vue-lazybee'

Vue.use(lazybee)
Vue.config.productionTip = false

new Vue({
  ...lazybee.init(),
  render: h => h(App)
}).$mount('#app')
