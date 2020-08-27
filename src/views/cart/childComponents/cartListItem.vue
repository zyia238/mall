<template>
  <div class="cartListItem">
    <check-button @click.native="buttonCheck" :isChecked="item.checked"/>
    <div class="shortcutImage">
      <img :src="item.image" alt />
    </div>
    <div class="titles">
      <h2>{{item.title}}</h2>
      <h3>{{item.desc}}</h3>
      <div class="pricewrapper">
        <span class="itemprice">{{item.price}}</span>
        <span>{{"x" + item.count}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from "./checkButton"

export default {
  name: "cartListItem",
  components:{
    checkButton
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    buttonCheck(){
      this.$store.commit('isChecked',this.item.iid)
    }
  }
};
</script>

<style lang="" scoped>
.cartListItem {
  border-bottom:2px solid grey;
  height: 150px;
  display: flex;
  background: white
}
.shortcutImage img {
  height: 148px
}

.titles {
  position: relative;
  flex: 1;
}

.titles h2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 20px;
  margin: 18px 4px;
}
.titles h3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-size: 12px;
  margin: 18px 4px;
  color: grey;
}

.pricewrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between
}

.itemprice{
    color: orange
}


</style>
