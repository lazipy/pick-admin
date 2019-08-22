import { userLogin, queryUserInfo, queryUserMenus } from '@/services/user'

/**
 * 通过route name判断是否与当前用户权限匹配
 * @param permissionsMap
 * @param route
 */
function hasPermission (permissionsMap, route) {
  for (let map of permissionsMap) {
    if (map.name === route.name) {
      return true
    } else if (map.children && map.children.length) {
      return hasPermission(map.children, route)
    }
  }
  return false
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param permissionsMap
 */
function filterAsyncRouter (asyncRouterMap, permissionsMap) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(permissionsMap, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, permissionsMap)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

export default {
  namespaced: true,
  state: {
    userInfo: {},
    permissionRoutes: [] // 权限路由
  },
  getters: {
    userInfo: state => state.userInfo,
    permissionRoutes: state => state.permissionRoutes
  },
  mutations: {
    // 保存用户信息
    save: (state, userInfo) => {
      state.userInfo = userInfo
    },

    // 生成用户路由
    generateRoutes: (state, payload) => {
      state.permissionRoutes = filterAsyncRouter(payload.routes, payload.menus)
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
    },
    /**
     * query user menus
     */
    queryMenus ({ commit }, payload) {
      return new Promise((resolve, reject) => {
        queryUserMenus({ name: payload.name }).then(res => {
          if (res.code === '0') {
            commit('generateRoutes', { routes: payload.moduleRoutes, menus: res.data })
          }
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
