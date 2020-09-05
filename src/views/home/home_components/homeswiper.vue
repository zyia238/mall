<template>
  <div>
    <van-swipe class="van-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="van-swipe-item" v-for="(item, index) in banners" :key="index" >
        <a :href="item.link">
          <img :src="item.image" @load="homeSwiperImageLoad" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
import "vant/lib/index.css";

Vue.use(Swipe);
Vue.use(SwipeItem);

export default {
  name: "homeswiper",
  props: ["banners"],

  methods: {
    homeSwiperImageLoad() {
      this.$emit("homeSwiperImageLoad");
    }
  }
};
</script>

<style  scoped>
van-swipe{
  width: 100%;
}

.van-swipe-item img {
  width: 100%;
}

.van-swipe-item a {
  width: 100%;
}



</style>
