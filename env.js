let baseURL = ''
// eslint-disable-next-line no-undef
console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api'
    break
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api'
    break
  case 'production':
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
  default:
    baseURL = 'http://mall-pre.springboot.cn/api'
    break
}
export default {
  baseURL
}
