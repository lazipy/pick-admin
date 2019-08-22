import store from '@/shared/lazybee/vuex'
import { addClass, removeClass } from './dom'

/**
 * 切换主题函数
 */
export function changeTheme (themeValue) {
  removeClass(document.body, 'theme-' + store.state.application.theme)
  addClass(document.body, 'theme-' + themeValue)
  localStorage.setItem('theme', themeValue)
  store.dispatch('application/setTheme', themeValue)
  loadCss(`/${themeValue}/index.css`)
}

/**
 * 加载 css
 * @param {*} path
 */
function loadCss (path) {
  const head = document.getElementsByTagName('head')[0]
  const link = document.createElement('link')
  link.href = path
  link.rel = 'stylesheet'
  link.type = 'text/css'
  head.appendChild(link)
}
