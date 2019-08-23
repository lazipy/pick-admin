const user = require('./user')
const menu = require('./menu')
const message = require('./message.js')

module.exports = {
  ...user,
  ...menu,
  ...message
}
