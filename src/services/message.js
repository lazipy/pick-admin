import request from '@/shared/lazybee/axios'

/**
 * query message
 * @param {*} data
 * type: 0 全部 1-已读 2-未读
 * page: 1
 * pageSize: 10
 */
export function queryMessage (data) {
  return request({
    url: '/user/message',
    method: 'post',
    data
  })
}
