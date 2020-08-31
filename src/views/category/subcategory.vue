<template>
  <div>
    <sub-category-list :subs="subs" />
    <category-list-more></category-list-more>
  </div>
</template>

<script>
import { getSubCategoryData } from "../../network/category";
import subCategoryList from "./childComponents/subCategoryList";
import categoryListMore from "./childComponents/categoryListMore";

export default {
  name: "subcategory",
  data() {
    return {
      subs: []
    };
  },
  components: {
    subCategoryList,
    categoryListMore
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
  },
  watch: {
    $route(to, from) {
      this.subs = [];
      if (this.$route.params.maitKey) {
        getSubCategoryData(this.$route.params.maitKey).then(res => {
          this.subs.push(...res.data.data.list);
        });
      }
    }
  }
};
</script>

<style lang="" scoped>
</style>
