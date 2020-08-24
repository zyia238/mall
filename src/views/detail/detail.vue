<template>
  <div class="detailwrapper">
    <detail-nav-bar @tabClick="tabClick"/>
    <scroll class="contents" ref="scrolls">
      <detail-swiper :swiperitems="itemInfo" />
      <detail-title :goods="goods" />
      <detail-images :imagesList="detailImage" @detailImageLoad="detailImageLoad"/>
      <item-params :params="itemParams" ref="itemparams"/>
      <comments-more ref="comment"/>
      <comments :comments="comments"/>
      <goods-list :goods="recommendList" ref="recommend"/>
      
    </scroll>
  </div>
</template>

<script>
import detailNavBar from "./childComponents/detailNavBar"
import detailSwiper from "./childComponents/detailSwiper"
import detailTitle from "./childComponents/detailTiltle"
import itemParams from "./childComponents/itemParams"
import commentsMore from "./childComponents/commentsMore"
import comments from "./childComponents/comments"
import detailImages from "./childComponents/detailImages"

import Scroll from "../../components/common/scroll/scroll"
import goodsList from "../../components/content/goodsList"

import { getRecommendData, getDetailData, Goods , Comments} from "../../network/detail"
import {debounce} from "../../../utils/debounce"

export default {
  name: "detail",
  components: {
    detailNavBar,
    detailSwiper,
    detailTitle,
    itemParams,
    Scroll,
    commentsMore,
    comments,
    goodsList,
    detailImages
  },
  data() {
    return {
      //详情页在这里通过路由地址的后缀对iid进行接收，并在详情页发送网络请求请求相关item的数据。
      iid: null,
      itemInfo: [],
      goods: {},
      detailImage:[],
      itemParams:{},
      comments:{},
      recommendList:[],
      //保存每一个tab的offsetTop高度
      topYs:[],
      //预先定义一个detailImage的防抖函数
      detailImageDebounce:null
    };
  },
  mounted() {
    //原先的goodslistItem的imageload事件也会造成home组件中的scrolls组件调用refresh方法
    //所以detail中的goodslistItem会emit出一个不同事件
    this.$bus.$on("detailimgload", () => {
      this.$refs.scrolls.bs.refresh();
    });
  },
  
  created() {
    this.iid = this.$route.params.iid;

    getRecommendData().then(res => {
      // console.log(res)  
      this.recommendList = res.data.data.list;
      // console.log(this.recommendList)

    })

    getDetailData(this.iid).then(res => {
      // console.log(res);
      this.itemInfo = res.data.result.itemInfo.topImages;

      this.itemParams = res.data.result.itemParams;
      // console.log( this.itemParams)
      this.comments = new Comments(res.data.result.rate.list[0].user,
      res.data.result.rate.list[0].images,
      res.data.result.rate.list[0].content,
      res.data.result.rate.list[0].created,
      res.data.result.rate.list[0].style
      );
      // console.log(this.comments);

      this.goods = new Goods(
        res.data.result.columns,
        res.data.result.itemInfo,
        res.data.result.shopInfo,
        res.data.result.detailInfo
      );

      this.detailImage = this.goods.detailImage
      // console.log(this.detailImage);
    });
  },
  methods:{
    tabClick(index){
      this.$refs.scrolls.bs.scrollTo(0,-this.topYs[index],300)
    },

    //detailImages完成加载后的处理函数，因为组件的offsetTop受detailImages的高度影响最大
    //我们在所有images加载完后获取的每个tab的offsetTop才是较为准确的高度
    detailImageLoad(){
      this.detailImageDebounce = debounce(()=>{
        this.topYs = []
        this.topYs.push(0)
        this.topYs.push(this.$refs.itemparams.$el.offsetTop)
        this.topYs.push(this.$refs.comment.$el.offsetTop)
        this.topYs.push(this.$refs.recommend.$el.offsetTop)
      },100)
      this.detailImageDebounce()
    }
  }
};
</script>

<style lang="" scoped>
.detailwrapper {
    height: 100vh;
}
.contents {
    height: calc(100% - 44px);
    position: relative;
    z-index: 998;
    background: #fff;
}
</style>
