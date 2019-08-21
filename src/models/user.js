import { userLogin, queryUserInfo } from '@/services/user'

export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  getters: {
    userInfo: state => state.userInfo
  },
  mutations: {
    save: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },
  actions: {
    /**
     * user login
     */
    login ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        userLogin(payload).then(res => {
          if (res.code === '0') {
            window.sessionStorage.setItem('userName', res.data.name)
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    /**
     * user info
     */
    query ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        queryUserInfo(payload).then(res => {
          if (res.code === '0') {
            commit('save', res.data)
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
