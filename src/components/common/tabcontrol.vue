<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in titles" :key="index" @click = "itemclick(index)">
          <span :class="{active:index === currentIndex}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tabcontrol',
  props:{
      titles:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data(){
      return {
          currentIndex:0
      }
  },
  methods:{
      itemclick:function(index){
          this.currentIndex = index;
          this.$emit('tabClick',index);
      }
  }
}
</script>

<style lang="" scoped>
.tabcontrol{
    background-color: white;
    height: 44px;
    line-height: 44px;
    z-index:999;
    display: flex;
    /* position:sticky;
    top: 44px; */
    width: 100%;
}

.tabcontrol>div{
    flex:1;
    text-align: center;
}

.active {
    color: pink;
    padding:0 6px 4px;
    border-bottom:2px solid pink;
}
</style>
