export default {
  path: '/personal',
  component: () => import('@/layout/index.vue'),
  name: 'personal',
  meta: { title: 'personal', icon: 'icon-personal' },
  redirect: '/personal/profile',
  children: [
    {
      path: 'message',
      name: 'message',
      component: () => import('./message.vue'),
      meta: { title: 'message', noCache: true }
    },
    {
      path: 'profile',
      name: 'profile',
      component: () => import('./profile.vue'),
      meta: { title: 'profile', noCache: true }
    },
    {
      path: 'modify-password',
      name: 'modify-password',
      component: () => import('./modify-password.vue'),
      meta: { title: 'modifyPassword', noCache: true }
    }
  ]
}
