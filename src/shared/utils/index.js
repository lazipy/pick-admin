/**
 * 验证props是否在规定内
 * @param {*} array
 */
export const OneOf = array => {
  return val => {
    return array.includes(val)
  }
}
