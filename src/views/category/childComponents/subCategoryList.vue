<template>
  <div class="categoryList">
      <sub-category-list-item v-for="(item,index) in subs" :key="index"
      :subsItem="item"/>
  </div>
</template>

<script>
import subCategoryListItem from './subCategoryListItem'

export default {
  name: 'subCategoryList',
  components:{
      subCategoryListItem
  },
  props:{
      subs:{
          type:Array,
          default(){
              return []
          }
      }
  }

}
</script>

<style lang="" scoped>
.categoryList{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>
