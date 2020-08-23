<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.background">
        <a :href="item.link">
          <img :src="item.image" @load="homeSwiperImageLoad"/>
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
  name: "homeswiper",
  props:['banners'],
  components: {
    Swiper,
    SwiperItem
  },
  methods:{
    homeSwiperImageLoad(){
      this.$emit('homeSwiperImageLoad')
    }
  }
};
</script>

<style  scoped>
</style>
