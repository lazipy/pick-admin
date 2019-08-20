import Router from './vue-router'
import AutoVuex from './vuex'
import VueI18nStorge from './vue-i18n'
import CreateService from './axios'
import options from '@/config.js'

let defaultOptions = {
  mode: 'history',
  base: process.env.BASE_URL,
  record: true,
  breadcrumb: true,
  scrollBehavior: () => ({ y: 0 }),
  locale: 'zh-CN'
}

const params = Object.assign(defaultOptions, options)

export const request = new CreateService(params.httpConfig)

export default {
  install (Vue) {
    Vue.use(Router)
    Vue.use(AutoVuex)
    Vue.use(VueI18nStorge)
  },
  init () {
    let i18n = new VueI18nStorge({
      default: params.locale,
      files: require.context('@/locales', true, /\.js$/)
    })

    let store = new AutoVuex({
      files: require.context('@/models', true, /\.js$/),
      pages: require.context('@/pages', true, /model\.js$/)
    })

    let router = new Router({
      mode: params.mode,
      base: params.base,
      record: params.record,
      breadcrumb: params.breadcrumb,
      scrollBehavior: params.scrollBehavior,
      routes: params.routes,
      modules: require.context('@/pages', true, /router\.js/),
      filter: params.filter,
      beforeEach: params.beforeEach,
      afterEach: params.afterEach
    })

    return {
      router,
      store,
      i18n
    }
  }
}
