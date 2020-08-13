<template>
  <div class="home">
    home
    <nav-header />
    <router-view></router-view>
    <nav-footer />
  </div>
</template>
<script>
import NavHeader from '../components/NavHeader';
import NavFooter from '../components/NavFooter';
export default {
  name: 'Home',
  components: {
    NavHeader,
    NavFooter
  }
}
</script>
