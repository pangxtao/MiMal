import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from '../env.js'
const mock = true
if (mock){
  require('./mock/api')
}
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
// 根据前端的跨域方式做调整
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
axios.defaults.timeout = 8000
// 接口错误拦截
axios.interceptors.response.use(function(response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
