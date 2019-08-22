/**
 * 通过route name判断是否与当前用户权限匹配
 * @param permissionsMap
 * @param route
 */
export function hasPermission (permissionsMap, route) {
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
export function filterAsyncRouter (asyncRouterMap, permissionsMap) {
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
