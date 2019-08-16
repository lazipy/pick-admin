import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const layoutConfig = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    indexRouter: true,
    path: '',
    component: () => import('@/pages/Layout.vue'),
    redirect: 'welcome',
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('@/pages/Welcome.vue'),
        meta: { title: '首页' }
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
  beforeEach: (to, from, next) => {
    NProgress.start()
    next()
  },
  afterEach: (to, from) => {
    NProgress.done()
  }
}
