<template>
  <div>
      <sub-category-list :subs="subs"/>
  </div>
</template>

<script>
import {getSubCategoryData} from '../../network/category'
import subCategoryList from './childComponents/subCategoryList'

export default {
  name: 'subcategory',
  data(){
      return {
          subs:[]
      }
  },
  components:{
      subCategoryList
  },
  mounted(){
      this.subs = [];
        getSubCategoryData(this.$route.params.maitKey).then(res => {
        this.subs.push(...res.data.data.list);
        console.log(this.subs)
      });
  },
  watch: {
    $route(to,from){
        
        this.subs = [];
        getSubCategoryData(this.$route.params.maitKey).then(res => {
        this.subs.push(...res.data.data.list);
        
      });
    }
  }
}
</script>

<style lang="" scoped>

</style>
