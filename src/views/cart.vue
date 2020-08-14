<!--Cart-->
<template>
  <div>
    <order-header />
    --Cart--
    <order-footer />
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import OrderFooter from '../components/OrderFooter'
export default {
  components: {
    OrderHeader,
    OrderFooter
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang='scss' scoped>

</style>
