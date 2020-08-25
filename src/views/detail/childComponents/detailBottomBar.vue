<template>
  <div class="bottombar">
    <div class="customer_service">
      <div></div>
      <span>客服</span>
    </div>
    <div class="shop">
      <div></div>
      <span>店铺</span>
    </div>
    <div class="collect">
      <div></div>
      <span>收藏</span>
    </div>
    <div class="cart">购物车</div>
    <div class="purchase">购买</div>
  </div>
</template>

<script>
export default {
  name: "detaiBottomBar"
};
</script>

<style lang="" scoped>
.bottombar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  font-size:12px;
  background: #fff;
  height: 49px;
  z-index: 999;
}

.bottombar> div {
  flex: 1;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center
}

.bottombar>div>div {
  width: 20px;
  height: 20px;
}

.customer_service>div{
  background: url("../../../assets/img/detail_bottom.png") -1px 0 no-repeat ;
}

.shop>div{
  background: url("../../../assets/img/detail_bottom.png") 0px -25px no-repeat ;
}

.collect>div{
  background: url("../../../assets/img/detail_bottom.png") 0px -49px no-repeat ;
}

.cart{
  background:skyblue;
  line-height: 49px
}

.purchase{
  background:pink;
  color: white;
  line-height: 78px
}
</style>
