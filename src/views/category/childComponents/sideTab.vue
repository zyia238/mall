<template>
  <div>
    {{sideTab.title}}
  </div>
</template>

<script>
export default {
  name: 'sideTab',
  props:{
    sideTab:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style lang="" scoped>
div{
    height: 50px;
    line-height: 50px;
    flex:1;
    text-align: center;
}
</style>
