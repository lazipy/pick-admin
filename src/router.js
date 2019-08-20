import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import lazybee from './shared/config/index.js'

const layoutConfig = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue'),
    meta: {
      title: 'login'
    }
  },
  {
    indexRouter: true,
    path: '',
    component: () => import('@/layout/index.vue'),
    redirect: 'welcome',
    meta: { title: 'home' },
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('@/pages/welcome.vue'),
        meta: { title: 'overview' }
      }
    ]
  },
  {
    path: '/404',
    name: 'notFount',
    component: () => import('@/pages/404.vue'),
    meta: { title: '404' }
  },
  {
    path: '/500',
    name: 'error',
    component: () => import('@/pages/500.vue'),
    meta: { title: '500' }
  },
  { path: '*', redirect: '/404' }
]

export default {
  routes: layoutConfig,
  beforeEach: async (to, from, next) => {
    const userName = window.sessionStorage.getItem('userName')
    const { store } = lazybee
    NProgress.start()
    if (userName) {
      if (to.path === '/login') {
        next('/')
        NProgress.done()
      } else {
        if (!store.state.user.userInfo.id) {
          await store.dispatch('user/query', { name: userName })
          next()
        } else {
          next()
        }
      }
    } else {
      if (to.path !== '/login') {
        next('/login')
        NProgress.done()
      } else {
        next()
      }
    }
  },
  afterEach: (to, from) => {
    NProgress.done()
  }
}
