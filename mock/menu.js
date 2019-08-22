const menus = {
  admin: [
    {
      id: 1,
      path: '/personal',
      name: 'personal',
      children: [
        {
          id: 11,
          path: 'message',
          name: 'message'
        },
        {
          id: 12,
          path: 'profile',
          name: 'profile'
        },
        {
          id: 13,
          path: 'modify-password',
          name: 'modify-password'
        }
      ]
    }
  ],
  tiber: [
    {
      id: 1,
      path: '/personal',
      name: 'personal',
      children: [
        {
          id: 11,
          path: 'message',
          name: 'message'
        },
        {
          id: 12,
          path: 'profile',
          name: 'profile'
        },
        {
          id: 13,
          path: 'modify-password',
          name: 'modify-password'
        }
      ]
    }
  ]
}

module.exports = {
  // query menus
  'POST /app/menus': (req, res) => {
    const { name } = req.body
    let menu = menus[name]
    return res.json({
      code: '0',
      msg: '获取成功',
      data: menu
    })
  }
}
