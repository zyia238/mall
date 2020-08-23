<template>
  <swiper class="maindetailswiper">
      <swiper-item v-for="(item,index) in swiperitems" :key="index">
          <img :src="item" alt="">
      </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
  name: 'detailSwiper',
  props:['swiperitems'],
  components:{
      Swiper,
      SwiperItem
  }

}
</script>

<style lang="" scoped>
.maindetailswiper{
    height: 300px
}
</style>
