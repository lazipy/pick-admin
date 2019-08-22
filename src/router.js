export default [
  {
    path: '/login',
    name: 'login',
    isNotMenu: true,
    component: () => import('@/pages/login.vue'),
    meta: {
      title: 'login'
    }
  },
  {
    indexRouter: true,
    path: '/',
    isNotMenu: true,
    component: () => import('@/layout/index.vue'),
    redirect: '/welcome',
    meta: { title: 'home' },
    children: [
      {
        path: 'welcome',
        name: 'welcome',
        isNotMenu: true,
        component: () => import('@/pages/welcome.vue'),
        meta: { title: 'overview', noCache: true }
      }
    ]
  },
  {
    path: '/404',
    name: 'notFount',
    isNotMenu: true,
    component: () => import('@/pages/404.vue'),
    meta: { title: '404', noCache: true }
  },
  {
    path: '/500',
    name: 'error',
    isNotMenu: true,
    component: () => import('@/pages/500.vue'),
    meta: { title: '500', noCache: true }
  }
]
