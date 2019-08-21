import Vue from 'vue'
import Vuex from 'vuex'

let models = {}

/**
 * 加载全局model
 */
const globalModels = require.context('@/models', true, /\.js$/)
globalModels.keys().forEach(key => {
  let path = key.slice(2, -3)
  const model = globalModels(key).default
  models[path] = model
})

/**
 * 加载模块model
 */
const moduleModels = require.context('@/pages', true, /model\.js$/)
moduleModels.keys().forEach(key => {
  let path = key.slice(2, -3)
  if (path === 'model') {
    path = 'pages'
  } else if (path.indexOf('model') !== -1) {
    path = path.slice(0, path.indexOf('model') - 1)
  }

  const model = moduleModels(key).default
  models[path] = model
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: models
})
