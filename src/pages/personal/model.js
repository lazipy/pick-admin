import { queryMessage } from '@/services/message'

export default {
  namespaced: true,
  state: {
    message: {
      list: [],
      total: 0
    }
  },
  getters: {
    message: state => state.message
  },
  mutations: {
    // 保存信息
    saveMessage (state, payload) {
      state.message = payload
    }
  },
  actions: {
    // 查询消息
    queryMessage ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        queryMessage(payload).then(res => {
          if (res.code === '0') {
            commit('saveMessage', res.data)
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
