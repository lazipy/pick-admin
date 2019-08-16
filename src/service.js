import { Message } from 'element-ui'

export default {
  httpConfig: {
    responseConfigCallBack: response => {
      if (response) {
        if (response.data && response.data.code) {
          if (response.data.code !== '0') {
            Message.error(response.data.msg ? response.data.msg : '返回状态码错误')
          }
        }
        return response.data
      } else {
        Message.error('响应成功，但是响应信息不存在！')
      }
    },
    responseErrorCallBack: error => {
      if (error.response) {
        switch (error.response.status) {
          case 500:
            Message.error('服务器端产生错误，请联系系统管理员！')
            break
          default:
            Message.warning('网络开了个小差，请稍候重试！')
        }
      }
    }
  }
}
