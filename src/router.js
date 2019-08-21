export default [
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
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/welcome',
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
  }
]
