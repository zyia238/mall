<template>
  <div class="detailTitleWrapper">
    <div class="uppertitle">
      <h3>{{goods.title}}</h3>
      <span class="realprice">{{goods.realPrice}}</span>
      <del>{{goods.oldPrice}}</del>
      <span>{{goods.discount}}</span>
    </div>
    <div class="middleTitle">
        <span v-for="(item,index) in goods.columns" :key="index">
            {{item}}
        </span>
    </div>
    <div class="services">
        <span v-for="(item,index) in goods.services" :key="index">
            <img :src="item.icon" class="icons">
            <span>{{item.name}}</span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailTitle",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="" scoped>
.middleTitle{
    display: flex;
}

.middleTitle span {
    flex: 1;
    text-align: center;
}

.services .icons{
  width: 14px;
}
</style>
