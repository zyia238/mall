<template>
  <div class="checkOutBar">
    <div class="check-area" @click="selectAll">
      <check-button :isChecked="isAllChecked"/>
      <span>全选</span>
    </div>
    <span class="totals">合计：{{total}}</span>
    <span class="checkout">去结算({{counts}})</span>
  </div>
</template>

<script>
import checkButton from "./checkButton";

export default {
  name: "checkOutBar",
  components: {
    checkButton
  },
  computed: {
    total() {
      const checkedItems = this.$store.state.cartList.filter(
        item => item.checked == true
      );
      let total = 0;
      for (let item of checkedItems) {
        total += item.price.substr(1) * item.count;
      }
      return total.toFixed(2);
    },
    counts() {
      const counts = this.$store.state.cartList;
      let totalcounts = 0;
      for (let item of counts) {
        totalcounts += item.count;
      }
      return totalcounts;
    },
    isAllChecked(){
      const checkedNum = this.$store.state.cartList.filter(item => item.checked).length
      if(checkedNum === this.$store.state.cartList.length){
        return true
      }else{
        return false
      }
    }
  },
  methods:{
    selectAll(){
      const checkedNum = this.$store.state.cartList
      if(checkedNum.filter(item => item.checked).length !== checkedNum.length){
        checkedNum.forEach(item => {
        item.checked = true
      })
      }else{
        this.$store.state.cartList.forEach(item => {
        item.checked = false
      })
      }

      
    }
  }
};
</script>

<style lang="" scoped>
.checkOutBar {
  position: fixed;
  display: flex;
  line-height: 40px;
  width: 100%;
  height: 40px;
  bottom: 49px;
  background: #eee;
  justify-content: space-between;
}

.check-area{
    display: flex;
    width: 100px;
}

.totals{
    flex:1
}

.checkout{
    width: 100px;
    background:red;
    color: white;
    text-align: center
}
</style>
