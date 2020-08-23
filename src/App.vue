<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar class="tabbar"/>
  </div>
</template>

<script>
import tabbar from './components/common/maintabbar'

export default {
  name: 'App',
  components:{
    tabbar
  }
}
</script>

<style>
@import "./assets/css/base.css";

.tabbar{
  z-index: 997;
  background:#fff;
}
</style>
