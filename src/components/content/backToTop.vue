<template>
  <div class="backtotop">
      <img src="../../assets/img/top.png" alt="">
  </div>
</template>
    
<script>
export default {
  name: 'backToTop',
}
</script>

<style lang="" scoped>
    .backtotop{
        position: fixed;
        bottom: 40px;
        right: 40px;
        width: 20px;
        z-index: 999;
    }
</style>
