<template>
  <div class="goodsList">
      <goods-list-item v-for="item in goods" :key="item.title" :goodsitem="item"/>
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
   methods:{
        
    }
  
}
</script>

<style lang="" scoped>
.goodsList {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
}


</style>
