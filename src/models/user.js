import { userLogin } from '@/services/user'

export default {
  namespaced: true,
  state: {
    id: 0,
    name: ''
  },
  getters: {
    userId: state => state.id
  },
  mutations: {
    save: (state, userInfo) => {
      state = { ...userInfo }
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
            commit('save', res.data.data)
          }
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
