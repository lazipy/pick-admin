import request from '@/shared/lazybee/axios'

/**
 * user login
 * @param {*} data
 */
export function userLogin (data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

/**
 * user info
 * @param {*} data
 */
export function queryUserInfo (data) {
  return request({
    url: '/user/info',
    method: 'post',
    data
  })
}
