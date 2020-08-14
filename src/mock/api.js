import Mock from 'mockjs'
Mock.mock('/api/user/login', 'get', function(params) {
  return {
    status: 0,
    data: {
      name: '@name',
      sex: '@boolean',
      id: 12,
      email: 'admin@51pures.com',
      phone: null,
      role: 0,
      createTime: 147904832500,
      updateTIme: 147904832500
    },
    msg: 'success' }
})
