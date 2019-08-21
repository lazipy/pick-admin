import axios from 'axios'
import { Message } from 'element-ui'

/**
 * Http 请求库构造函数
 * @param {配置项} params
 */
function CreateService (params) {
  // 创建axios实例
  let service = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL, // 设置默认的BASE_URL
    headers: { Accept: 'application/json' }, // 数据格式 默认JSON
    withCredentials: true,
    timeout: 60 * 1000 // 请求超时时间
  })

  // 请求前的拦截器
  service.interceptors.request.use(
    config => {
      return config
    },
    error => {
      Promise.reject(error)
    }
  )

  // 响应前的拦截器
  service.interceptors.response.use(
    response => {
      if (response) {
        if (response.data && response.data.code) {
          if (response.data.code !== '0') {
            Message.error(
              response.data.msg ? response.data.msg : '返回状态码错误'
            )
          }
        }
      } else {
        Message.error('响应成功，但是响应信息不存在！')
      }
      return response.data
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 500:
            Message.error('服务器端产生错误，请联系系统管理员！')
            break
          default:
            Message.warning('网络开了个小差，请稍候重试！')
        }
      }
      return Promise.reject(error)
    }
  )

  return service
}

export default CreateService()
