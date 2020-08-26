<template>
  <div>
      <cart-list-item v-for="(item,index) in this.$store.state.cartList" 
      :key="index"
      :item="item"
      />
  </div>
</template>

<script>
import cartListItem from './cartListItem'
export default {
  name: 'cartList',
  components:{
      cartListItem
  }
}
</script>

<style lang="" scoped>

</style>
