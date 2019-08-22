const user = require('./user')
const menu = require('./menu')

module.exports = {
  ...user,
  ...menu
}
