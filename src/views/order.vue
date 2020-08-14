<template>
  <div class="order">
    <order-header />
    <router-view />
    <order-footer />
  </div>
</template>
<script>
import OrderHeader from '../components/OrderHeader'
import OrderFooter from '../components/OrderFooter'
export default {
  name: 'Order',
  components: {
    OrderHeader,
    OrderFooter
  }
}
</script>
