const Mock = require('mockjs')
const Random = Mock.Random

let messages = []

for (let i = 0; i < 304; i++) {
  messages.push(Mock.mock({
    'id|+1': 1,
    title: Random.ctitle(15, 30),
    type: Random.ctitle(4),
    read: Random.boolean(1, 1, true),
    created_at: Random.datetime()
  }))
}

module.exports = {
  // user message
  'POST /user/message': (req, res) => {
    const { type, page, pageSize } = req.body

    let list = []

    if (type === 0) {
      list = messages.slice(page * pageSize, page * pageSize + pageSize)
    } else if (type === 1) {
      list = messages.filter(item => item.read)
      list = list.slice(page * pageSize, page * pageSize + pageSize)
    } else {
      list = messages.filter(item => !item.read)
      list = list.slice(page * pageSize, page * pageSize + pageSize)
    }

    setTimeout(() => {
      return res.json({
        code: '0',
        msg: '获取成功',
        data: {
          list,
          total: messages.length
        }
      })
    }, 1000)
  }
}
