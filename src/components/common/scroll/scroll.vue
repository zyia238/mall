<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  props:{
      probeType:{
          type:Number,
          default(){
              return 0
          }
      }
  },
  data(){
      return {
          bs:null
      }
  },

  mounted(){
       this.bs = new BScroll(this.$refs.wrapper,{
           //直接将probeType设置为实时侦测会导致scroll的不断回调从而影响性能，比较友好的做法是
           //将probeType当做父组件传给子组件的值，要用到侦测时候传2或者3，不用的时候默认不侦测。
        //   probeType:2,
          probeType:this.probeType,
          pullUpLoad:true,
          click:true
      });

      this.bs.on('scroll',(position)=>{
        //   console.log(position)
          this.$emit('backtotop',position)
      });

      this.bs.on('pullingUp',()=>{
          this.$emit('pullingup')
      });

  }
}
</script>

<style lang="" scoped>

</style>
