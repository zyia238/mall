<template>
  <div id="cart">
    <nav-bar class="cartNavBar">
      <div slot="mid">购物车({{$store.state.cartList.length}})</div>
    </nav-bar>
    <scroll class="cart-list-content" ref="scrolls">
      <cart-list/>
    </scroll>
  </div>
</template>

<script>
import Scroll from '../../components/common/scroll/scroll'
import navBar from '../../components/common/navbar'

import cartList from './childComponents/cartList'

export default {
  name: 'cart',
  components:{
    Scroll,
    navBar,
    cartList
  }
  ,
  //修复购物车无法滚动的bug
  activated(){
  this.$refs.scrolls.bs.refresh()
}
}


</script>

<style lang="" scoped>

#cart{
  height:100vh;
}

.cartNavBar{
  position:fixed;
  top: 0;
  width: 100%;
  background:pink;
  z-index:999
}

.cart-list-content{
  margin-top:44px;
  height: calc(100% - 44px - 49px)
}

</style>
