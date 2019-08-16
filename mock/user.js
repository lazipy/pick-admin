const users = {
  admin: {
    id: 1,
    name: 'admin',
    password: '123456',
    mobile: '09888888888'
  },
  test: {
    id: 2,
    name: 'test',
    password: '123456',
    mobile: '09777777777'
  }
}

module.exports = {
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
  }
}
