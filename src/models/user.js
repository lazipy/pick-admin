import { userLogin } from '@/services/user'

export default {
  namespaced: true,
  state: {
    userId: 0,
    userName: ''
  },
  getters: {
    userId: state => state.userId
  },
  mutations: {
    save: (state, userInfo) => {
      state.userId = userInfo.userId
      state.userName = userInfo.name
    }
  },
  actions: {
    login ({ commit }) {
      userLogin().then(res => {
        if (res.code === '0') {
          commit('save', res.data)
        }
      })
    }
  }
}
