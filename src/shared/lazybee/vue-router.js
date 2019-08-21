import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import layoutRoutes from '@/router.js'
import store from './vuex'

let moduleRoutes = []
// 添加访问历史记录
function addVisiteRecord (router, to) {
  if (router.records) {
    if (!router.records.map(v => v.path).includes(to.path)) {
      router.records = [...router.records, to]
    }
  } else {
    router.records = [to]
  }
}

// 添加面包屑信息
function addBreadcrumb (router) {
  let routes = [...router.options.routes]
  const indexRoute = getIndexRoute(routes)
  let matched = router.currentRoute.matched.filter(item => item.name)
  const first = matched[0]
  if (first && !first.indexRouter) {
    router.breadcrumbs = [indexRoute, ...matched]
  } else {
    router.breadcrumbs = [...matched]
  }
}

// 获取首页路由
function getIndexRoute (routes) {
  let indexRoute = routes.find(route => route.indexRouter)
  if (indexRoute.children) {
    delete indexRoute.children
  }
  return indexRoute
}

// 获取所有模块的router.js
const modules = require.context('@/pages', true, /router\.js/)
modules.keys().forEach(route => {
  const routerModule = modules(route)
  moduleRoutes.push(routerModule.default || routerModule)
})

Vue.use(Router)

// 实例化vue-router
let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: layoutRoutes
})

/**
 * 路由前置钩子
 */
router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const userName = window.sessionStorage.getItem('userName')
  if (userName) {
    if (to.path === '/login') {
      next('/')
      NProgress.done()
    } else if (!store.state.user.userInfo.id) {
      await store.dispatch('user/query', { name: userName })
      moduleRoutes.push({ path: '*', redirect: '/404' })
      router.addRoutes(moduleRoutes)
      next({ path: to.path, replace: true })
    } else {
      next()
    }
  } else {
    if (to.path !== '/login') {
      next('/login')
      NProgress.done()
    } else {
      next()
    }
  }
})

/**
 *路由后置钩子
 */
router.afterEach((to, from) => {
  NProgress.done()
  addVisiteRecord(router, to) // 记录访问历史记录
  addBreadcrumb(router) // 添加面包屑
})

export default router
