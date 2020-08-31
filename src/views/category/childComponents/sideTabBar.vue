<template>
  <div class="sidetabbar">
          <side-tab v-for="(item,index) in categoryList" :key="index"
          :class="{active:currentIndex === index}"
          :sideTab="item"
          @click.native = "tabClick(item, index)"
          />
  </div>
</template>

<script>
import sideTab from './sideTab'

export default {
  name: 'sideTabBar',
  components:{
      sideTab
  },
  data(){
      return {
          currentIndex:0,
          saveIndex:0
      }
  },
  methods:{
      tabClick(item, index){
          this.currentIndex = index;
          this.$emit('switchSub', item.maitKey)
      }
  },
  props:{
      categoryList:{
          type:Array,
          default(){
              return []
          }
      }
  },
  activated(){
      this.currentIndex = this.saveIndex
  },

  deactivated(){
      this.saveIndex = this.currentIndex
  },
  watch:{
      $route(to,from){
          console.log(to)
          console.log(from)
          if(to.fullPath == '/category/3627'){
              this.currentIndex = 0;
          }
      }
  }
}
</script>

<style lang="" scoped>
.sidetabbar{   
    background:#eee;
    display: flex;
    flex-direction: column;
}



.active{
    font-weight: 700;
    color: pink;
    background:white;
    border-left: 2px solid pink;
}
</style>
