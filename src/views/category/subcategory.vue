<template>
  <div>
    <sub-category-list :subs="subs" />
    <category-list-more/>
    <goods-list :goods="showGoods"/>
  </div>
</template>

<script>
import {
  getCategoryData,
  getSubCategoryData,
  getSubDetail
} from "../../network/category";
import subCategoryList from "./childComponents/subCategoryList";
import categoryListMore from "./childComponents/categoryListMore";

import goodsList from "../../components/content/goodsList";
import goodsListItem from "../../components/content/goodsListItem";

export default {
  name: "subcategory",
  data() {
    return {
      subs: [],
      subdetails: [],
      miniWallkey: "10062603",
      goodsListDetails: {
        pop: [],
        new: [],
        sell: []
      },
      currentType:'pop'
    };
  },
  computed:{
    showGoods(){
      return this.goodsListDetails[this.currentType]
    }
  },
  components: {
    subCategoryList,
    categoryListMore,
    goodsList,
    goodsListItem
  },
  methods:{
    //获取某个分类项的pop,new,sell三类数据
    getSubDetails(){
      getSubDetail(this.miniWallkey, "pop").then(res => {
      this.goodsListDetails.pop = [];
      this.goodsListDetails.pop.push(...res.data);
    });
      getSubDetail(this.miniWallkey, "new").then(res => {
      this.goodsListDetails.new = [];
      this.goodsListDetails.new.push(...res.data);
    });
      getSubDetail(this.miniWallkey, "sell").then(res => {
      this.goodsListDetails.sell = [];
      this.goodsListDetails.sell.push(...res.data);
      console.log(this.goodsListDetails);
    });
    }
  },
  mounted() {
    this.subs = [];
    // console.log(this.$route.params.maitKey)
    if (this.$route.params.maitKey) {
      getSubCategoryData(this.$route.params.maitKey).then(res => {
        this.subs.push(...res.data.data.list);
        // console.log(this.subs);
      });
    }

    this.$bus.$on('categoryTabClick', index =>{
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      // console.log(this.currentType)
      this.subdetails.forEach(item => {
          if (item.maitKey == this.$route.params.maitKey) {
            this.miniWallkey = item.miniWallkey;
            this.getSubDetails();
          }
        });
    })
  },
  created() {
    getCategoryData().then(res => {
      let list = res.data.data.category.list;
      for (let item of list) {
        let subdetailsItem = {};
        subdetailsItem.maitKey = item.maitKey;
        subdetailsItem.miniWallkey = item.miniWallkey;
        this.subdetails.push(subdetailsItem);
      }
    });
    //获取默认的subcategory的首页的数据
    this.getSubDetails();
  },
  watch: {
    $route(to, from) {
      this.subs = [];
      if (this.$route.params.maitKey) {
        getSubCategoryData(this.$route.params.maitKey).then(res => {
          this.subs.push(...res.data.data.list);
        })
      }

      //获取当前分类项的miniWallkey
      this.subdetails.forEach(item => {
          if (item.maitKey == this.$route.params.maitKey) {
            this.miniWallkey = item.miniWallkey;
            //同时加载该分类项的pop,new以及sell对应的item
            this.getSubDetails();
          }
        });
    }
  }
};
</script>

<style lang="" scoped>
</style>
