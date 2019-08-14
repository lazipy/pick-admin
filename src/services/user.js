import { request } from 'vue-lazybee'

export function userLogin () {
  return request({
    url: '/user/login',
    method: 'get'
  })
}
