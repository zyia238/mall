<template>
  <div id="home">
    <navbar class="homenavbar">
      <div slot="mid">首页欢迎你</div>
    </navbar>
    <tab-control :titles="['新品','热门','时尚']" @tabClick="handleTabClick" ref="tabControl1" class="tab-control"
    v-show="isTabControlFixed"/>
    <scroll
      class="content"
      ref="scrolls"
      @backtotop="scrollHandle"
      :probe-type="3"
      @pullingup="pullinguphandle(currentGoods)"
    >
      <home-swiper :banners="banners" class="home_swiper" @homeSwiperImageLoad="swiperHandler"></home-swiper>
      <recommends :recommends="recommends" class="recommends" />
      <weekly />
      <tab-control :titles="['新品','热门','时尚']" @tabClick="handleTabClick" ref="tabControl2"></tab-control>
      <goods-list :goods="showGoods" class="goodslist" />
    </scroll>
    <!-- 监听组件的原生事件时需要使用native修饰符 -->
    <back-to-top @click.native="backToTop" v-show="isShow" />
  </div>
</template>

<script>
import navbar from "../../components/common/navbar";
import tabControl from "../../components/common/tabcontrol";
import goodsList from "../../components/content/goodsList";
import scroll from "../../components/common/scroll/scroll";
import backToTop from "../../components/content/backToTop";

import { getHomeData, getGoodsItems } from "../../network/home";

import homeSwiper from "./home_components/homeswiper";
import recommends from "./home_components/recommends";
import weekly from "./home_components/weekly";

export default {
  name: "home",
  components: {
    navbar,
    homeSwiper,
    recommends,
    weekly,
    tabControl,
    goodsList,
    scroll,
    backToTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentGoods: "pop",
      isShow: false,
      isTabControlFixed: false,
      offsetTop: 0,
      saveY:0
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentGoods].list;
    }
  },
  created() {
    this.getHomeData();
    this.getGoodsItems("pop");
    this.getGoodsItems("new");
    this.getGoodsItems("sell");
    
  },
  mounted() {
    // const refresh = this.$refs.scrolls.bs.refresh;
    // const refresher = this.debounce(refresh, 500);

    this.$bus.$on("homeimgload", () => {
      //因为每一张图片加载完毕后都会通过组件通信传递给home组件，这致使home组件需要调用相同的refresh函数多次
      //我们需要对调用同一函数多次的现象进行防抖动处理
      this.$refs.scrolls.bs.refresh();

      // refresher();
      // console.log("----");
    });
  },

  activated(){
    this.$refs.scrolls.bs.scrollTo(0,this.saveY);
    //最好刷新一下，不让会出现莫名其妙上移到顶部的bug
    this.$refs.scrolls.bs.refresh();
  },
  deactivated(){
    this.saveY = this.$refs.scrolls.bs.y;
  },

  methods: {
    swiperHandler() {
      this.offsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    handleTabClick(index) {
      switch (index) {
        case 0:
          this.currentGoods = "pop";
          break;
        case 1:
          this.currentGoods = "new";
          break;
        case 2:
          this.currentGoods = "sell";
          break;
      }

      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //防抖函数的确能够提升些许性能，但在实际开发过程中，业务永远优先于性能
    // debounce(func, delay) {
    //   let timer = null;
    //   return function(...args) {
    //     if (timer) {
    //       clearTimeout(timer);
    //     }
    //     timer = setTimeout(() => {
    //       func.apply(this,args);
    //     }, delay);
    //   };
    // },
    getHomeData() {
      getHomeData().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getGoodsItems(type) {
      const page = this.goods[type].page + 1;
      getGoodsItems(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;

        this.$refs.scrolls.bs.finishPullUp();
        console.log(this.goods)
      });
    },
    backToTop() {
      this.$refs.scrolls.bs.scrollTo(0, 0, 500);
    },
    scrollHandle(position) {
      //position对象中的y属性始终为负数值
      this.isShow = -position.y > 1500;
      //44 为navbar的高度
      this.isTabControlFixed = -position.y + 44> this.offsetTop;
    },
    pullinguphandle(type) {
      this.getGoodsItems(type);
    }
  }
};
</script>

<style lang="" scoped>
#home {
  position: relative;
  height: 100vh;
}
.homenavbar {
  background-color: pink;
  color: white;
  position: fixed;
  width: 100%;
  z-index: 999;
}

.home_swiper {
  padding-top: 44px;
}
.recommends {
  margin-top: 4px;
}

.goodslist {
  z-index: 1;
}

.tab-control{
  position: fixed;
  z-index: 999;
  top: 44px;
}

.content {
  height: calc(100% - 93px);
  /* margin-top: 44px; */
}

.tabcontrollfixed {
  position: fixed;
  left: 0;
  z-index: 999;
  background: red;
}
</style>