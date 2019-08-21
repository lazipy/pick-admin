export default {
  namespaced: true,
  state: {
    languages: [
      { key: 'zh-CN', icon: 'china', text: '简体中文' },
      { key: 'en-US', icon: 'english', text: 'English' }
    ]
  },
  getters: {
    languages: state => state.languages
  },
  mutations: {
  },
  actions: {
  }
}
