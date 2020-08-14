<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  mounted() {
    this.axios.get('/user/login').then(res => {
      console.log(res)
    })
  },
  methods: {
    name() {

    }
  }
}
</script>
<style lang="scss">
</style>
