<template>
  <div id="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbar',
}
</script>

<style scoped>
  #tabbar{
    display:flex;
    position:fixed;
    background-color: white;
    height:49px;
    left:0;
    right:0;
    bottom:0;
    z-index: 997;
    box-shadow:0px -1px 1px rgba(100,100,100,.1);
  }
  
  #tabbar div{
    flex:1;
    line-height:49px;
    text-align:center;
  }
</style>
