<template>
  <div class="maintabbar">
      <tabbar>
      <tabbar-item path="/home">
        <div>首页</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <div>购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <div>我的</div>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import tabbar from "./tabbar.vue";
import tabbarItem from "./tabbarItem.vue";

export default {
  name: 'mainTabbar',
    components:{
    tabbar,
    tabbarItem
  }
}
</script>

<style scoped>
.maintabbar{
  height: 49px;
  background:#fff;
}
</style>
