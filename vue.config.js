module.exports = {
  css: {
    extract: false
  },
  devServer:{
    host:'localhost', //本机地址
    port:8080, //端口
    proxy:{
      [process.env.VUE_APP_BASE_API]:{ //代理对象
        target:'https://www.imooc.com', //目标地址
        changeOrigin:true, //改变原始地址
        pathRewrite:{
          ['^' + process.env.VUE_APP_BASE_API]: '' //清空代理对象
        }
      }
    }
  }
};