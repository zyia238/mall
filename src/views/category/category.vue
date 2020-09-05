<template>
  <div class="category">
    <nav-bar class="navbar">
      <div slot="left" class="left"
          @click ='backClick'>&lt;</div>
      <div slot="mid">分类</div>
    </nav-bar>
    
    <div class="middleWrapper">
      <!-- 左边的列表和右边的显示需要分别使用滚动加以控制 -->
      <scroll>
      <div class="leftHandSide" >
          <side-tab-bar :categoryList="categoryList" @switchSub="switchSub" ref="sideTabBar"/>
      </div>
      </scroll>
      <scroll ref="subList">
      <div class="rightHandSide">
        <keep-alive>
          <router-view/>
        </keep-alive>   
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
      currentKey:'3627',
      saveKey:0
    };
  },
  methods:{
      switchSub(maitKey){
        console.log(maitKey)
          this.currentKey = maitKey
          this.$router.replace('/category/' + this.currentKey)
      },
      backClick(){
          this.$router.go(-1)
      }
  },
  created() {
    // this.$router.replace('/category/' + this.currentKey)

    getCategoryData().then(res => {
      // console.log(res);
      
      this.categoryList.push(...res.data.data.category.list);
      
      //   console.log(this.categoryList)
    });
  },
  mounted(){
    this.$bus.$on('subsImageLoad',()=>{
      this.$refs.subList.bs.refresh()
    })
  },
  //保存分类页面tabbar已浏览信息以防在切换页面的时候刷新组件
  beforeRouteEnter (to, from, next) {
  next(vm => {
    // console.log(vm.$refs.sideTabBar.currentIndex)
    vm.$refs.sideTabBar.currentIndex = vm.$refs.sideTabBar.saveIndex
    vm.currentKey = vm.saveKey
    if(vm.saveKey === 0){
      vm.$router.replace('/category/3627')
    }else{
      console.log(vm.saveKey)
      vm.$router.replace('/category/' + vm.saveKey)
    }

  })
},

  beforeRouteLeave (to, from, next) { 
    this.$refs.sideTabBar.saveIndex = this.$refs.sideTabBar.currentIndex
    this.saveKey = this.$route.params.maitKey
    console.log(this.$route.params.maitKey)
    // console.log(this.$refs.sideTabBar)
    next()
  },
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
