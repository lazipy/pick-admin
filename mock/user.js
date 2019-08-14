module.exports = [
  {
    url: '/user/login',
    type: 'get',
    response: (req, res) => {
      res.json({
        code: '0',
        msg: '登录成功',
        data: {
          id: 10,
          name: '李子屏'
        }
      })
    }
  }
]
