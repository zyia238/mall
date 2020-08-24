<template>
  <div class="goodsList">
      <goods-list-item v-for="(item, index) in goods" :key="index" :goodsitem="item"/>
  </div>
</template>

<script>
import goodsListItem from './goodsListItem'
export default {
  name: 'goodslist',
  components:{
      goodsListItem
  },
  props:{
      goods:{
          type:Array,
          default(){
              return []
          }
      }
  },
}
</script>

<style lang="" scoped>
.goodsList {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
}


</style>
