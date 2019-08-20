/**
 * 验证props是否在规定内
 * @param {*} array
 */
export const OneOf = array => {
  return val => {
    return array.includes(val)
  }
}

/**
 * 验证props的length必须大于0
 * @param {*} array
 */
export const gtZero = (val) => val.length > 0
