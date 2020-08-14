<!--index-->
<template>
  <div>
    index
  </div>
</template>
<script>
import storage from '../storage/index'
export default {
  name: 'Index',
  data() {
    return {}
  },
  mounted() {
    storage.setItem('name', '小红')
  },
  methods: {}

}
</script>
<style lang='scss' scoped>

</style>
