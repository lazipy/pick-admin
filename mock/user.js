const users = {
  admin: {
    id: 1,
    name: 'admin',
    password: '123456',
    mobile: '09888888888',
    roleName: 'super administrator',
    avatar: 'http://cdn.duitang.com/uploads/item/201410/26/20141026191422_yEKyd.thumb.700_0.jpeg'
  },
  tiber: {
    id: 2,
    name: 'tiber',
    password: '123456',
    mobile: '09777777777',
    roleName: 'the average user',
    avatar: 'http://cdn.duitang.com/uploads/item/201608/25/20160825214118_nMzNT.thumb.700_0.jpeg'
  }
}

module.exports = {
  // user login
  'POST /user/login': (req, res) => {
    const { name, password } = req.body
    let user = users[name]
    if (!user) {
      return res.json({
        code: '-1',
        msg: '用户不存在',
        data: {}
      })
    }
    if (user.password !== password) {
      return res.json({
        code: '-1',
        msg: '密码错误',
        data: {}
      })
    }
    setTimeout(() => {
      return res.json({
        code: '0',
        msg: '登录成功',
        data: user
      })
    }, 1000)
  },

  // user info
  'POST /user/info': (req, res) => {
    const { name } = req.body
    let user = users[name]
    if (!user) {
      return res.json({
        code: '-1',
        msg: '用户不存在',
        data: {}
      })
    }
    return res.json({
      code: '0',
      msg: '获取成功',
      data: user
    })
  }
}
