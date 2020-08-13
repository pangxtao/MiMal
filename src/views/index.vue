<!--index-->
<template>
    <div>
        index
    </div>
</template>
<script>
import storage  from '../storage/index'
export default {
    name:"index",
    data() {
      return{}
    },
    methods:{},
    mounted(){
     storage.setItem('name','小红')
    }
    

}
</script>
<style lang='scss' scoped>

</style>