<template>
  <div class="goodslistitem" @click="itemClick">
    <a>
      <img :src="goodsItemImage" @load="imgload" alt />
      <div>
        <h2>{{goodsitem.title}}</h2>
        <span>{{goodsitem.cfav}}</span>
        <span>{{goodsitem.price}}</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "goodsListItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    goodsItemImage() {
      // 通过recommend接口请求回来的数据只需要直接调用image属性，而没有show.img属性

      return this.goodsitem.image
        ? this.goodsitem.image
        : this.goodsitem.show.img;

      //return this.goodsitem.show.img || this.goodsitem.image 注意逻辑或的前后顺序
    }
  },
  methods: {
    //通过路由的方式做判断，如果当前在detail页面，就不需要发送需要让home组件刷新的自定义事件了
    imgload() {
      if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus.$emit("homeimgload");
      }else if (this.$route.path.indexOf("/detail") !==-1){
        this.$bus.$emit("detailimgload")
      }
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsitem.iid);
    }
  }
};
</script>

<style lang="" scoped>
.goodslistitem {
  width: 46%;
  z-index: 1;
}

.goodslistitem img {
  width: 100%;
}
</style>
