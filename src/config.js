export default {
  routes: [
    {
      indexRouter: true,
      path: '/',
      name: 'welcome',
      component: () => import('@/pages/Welcome.vue'),
      meta: {
        title: '欢迎使用'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/Login.vue'),
      meta: {
        title: '登录'
      }
    }
  ]
}
