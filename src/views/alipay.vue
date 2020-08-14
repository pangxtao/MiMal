<!--aliPay-->
<template>
  <div>
    --aliPay--
  </div>
</template>
<script>
export default {
  name: 'Alipay',
  data() {
    return {}
  },
  methods: {
    show(){
      var globalCounter = { }
      ;(function(){
        var n = 0
        globalCounter.increment = function() {
          return ++n
        }
      })
      let foo = ''
      let name = '小明'
      name = 'heloo'
      console.log(name)
      function bar(params) {}
      function baz(){}
      foo = 2
      if (foo) { bar(); baz() }
    },
    hello(){

    }

  }
}
</script>
<style lang='scss' scoped>

</style>
