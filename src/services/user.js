import { request } from '@/shared/lazybee'

export function userLogin (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
