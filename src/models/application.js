export default {
  namespaced: true,
  state: {
    themes: ['4C70E8', '1DC9B7', 'FFB822'],
    theme: localStorage.getItem('theme') || '4C70E8', // 主题色
    languages: [
      { key: 'zh-CN', icon: 'china', text: '简体中文' },
      { key: 'en-US', icon: 'english', text: 'English' }
    ],
    // 页面访问记录
    visitedViews: [],
    cachedViews: [] // 需要缓存的页面
  },
  getters: {
    theme: state => state.theme,
    themes: state => state.themes,
    languages: state => state.languages,
    visitedViews: state => state.visitedViews
  },
  mutations: {
    // 改变主题
    setTheme (state, theme) {
      state.theme = theme
    },
    // 添加一个访问过的页面
    addVisitedViews (state, view) {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push({
        name: view.name,
        path: view.path,
        title: view.meta.title || 'no-name'
      })
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
      }
    },
    delVisitedViews (state, view) {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews.splice(index, 1)
          break
        }
      }
    },
    delOthersViews (state, view) {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews = state.visitedViews.slice(i, i + 1)
          break
        }
      }
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews = state.cachedViews.slice(index, i + 1)
          break
        }
      }
    },
    delAllViews (state) {
      state.visitedViews = []
      state.cachedViews = []
    }
  },
  actions: {
    // 改变主题
    setTheme ({ commit }, theme) {
      commit('setTheme', theme)
    },
    // 页面访问记录
    addVisitedViews ({ commit }, view) {
      commit('addVisitedViews', view)
    },
    delVisitedViews ({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('delVisitedViews', view)
        resolve([...state.visitedViews])
      })
    },
    delOthersViews ({ commit, state }, view) {
      return new Promise((resolve) => {
        commit('delOthersViews', view)
        resolve([...state.visitedViews])
      })
    },
    delAllViews ({ commit, state }) {
      return new Promise((resolve) => {
        commit('delAllViews')
        resolve([...state.visitedViews])
      })
    }
  }
}
