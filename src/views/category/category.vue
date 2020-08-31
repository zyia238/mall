<template>
  <div class="category">
    <nav-bar class="navbar">
      <div slot="left" class="left"
          @click ='backClick'>&lt;</div>
      <div slot="mid">分类</div>
    </nav-bar>
    
    <div class="middleWrapper">
      <scroll>
      <div class="leftHandSide">
          <side-tab-bar :categoryList="categoryList" @switchSub="switchSub"/>
      </div>
      </scroll>
      <scroll ref="subList">
      <div class="rightHandSide">
          <router-view/>
      </div>
      </scroll>
    </div>

  </div>
</template>

<script>
import sideTabBar from "./childComponents/sideTabBar";
import navBar from "../../components/common/navbar";
import Scroll from "../../components/common/scroll/scroll";

import { getCategoryData, getSubCategoryData } from "../../network/category";

export default {
  name: "category",
  components: {
    sideTabBar,
    Scroll,
    navBar
  },
  data() {
    return {
      categoryList: [],
    };
  },
  methods:{
      switchSub(maitKey){
          this.$router.replace('/category/' + maitKey)
      },
      backClick(){
          this.$router.go(-1)
      }
  },
  created() {
    getCategoryData().then(res => {
      console.log(res);
      this.categoryList.push(...res.data.data.category.list);
      //   console.log(this.categoryList)
    });
  },
  mounted(){
    this.$bus.$on('subsImageLoad',()=>{
      this.$refs.subList.bs.refresh()
    })
  }
};
</script>

<style lang="" scoped>
.navbar {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background: pink;
  color: white;
}

.category {
  height: 100vh;
  position: relative;
   background: white;
   z-index: 998;
}

.leftHandSide {
  overflow: hidden;
  /* margin-top: 44px; */
  width: 75px;
}

.scrolls {
    height: 100%;
}

.middleWrapper {
  position: absolute;
  margin-top: 44px;
  display: flex;
  height: calc(100% - 44px - 49px);
  width: 100%;
  z-index:998;
 
}

.rightHandSide {
  flex: 1;
  /* margin-top: 44px; */
  overflow: hidden;
}
</style>
