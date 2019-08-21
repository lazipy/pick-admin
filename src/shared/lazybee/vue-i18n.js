import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang

let messages = {}

const locales = require.context('@/locales', true, /\.js$/)
// 获取所有语言包
locales.keys().forEach(key => {
  const name = key.slice(2, -3)
  const locale = locales(key).default

  if (name === 'en-US') {
    messages[name] = {
      ...locale,
      ...elementEnLocale
    }
  } else {
    messages[name] = {
      ...locale,
      ...elementZhLocale
    }
  }
})

// 缓存cookie
let locale = Cookies.get('locale') || 'zh-CN'
Cookies.set('locale', locale)

// 实例化
Vue.use(Vuei18n)
let i18n = new Vuei18n({
  locale,
  messages
})

// 添加 setLocale 和 getLocale 方法
i18n.setLocale = function (locale) {
  Cookies.set('locale', locale)
  window.location.reload()
}

i18n.getLocale = function () {
  return i18n.locale
}

// 热更新
if (module.hot) {
  module.hot.accept(locales.keys(), function () {
    locales.keys().forEach(key => {
      const name = key.slice(2, -3)
      const locale = locales(key).default
      i18n.setLocaleMessage(name, locale)
    })
  })
}

export default i18n
