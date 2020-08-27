<template>
  <div class="checkButton">
    <div>
      <img src="../../../assets/img/tick.png" v-show="isChecked">
    </div> 
  </div>
</template>

<script>
export default {
  name: 'checkButton',
  props:{
    isChecked:{
      type:Boolean,
      default(){
        return true
      }
    }
  }
  // 不可以直接在组件内设置Item的选中与否，一定要在对象里监听
  // data(){
  //   return {
  //     isChecked:false
  //   }
  // },
  // methods:{
  //   itemClicked(){
  //     this.isChecked = !this.isChecked
  //   }
  // }

}
</script>

<style lang="" scoped>
.checkButton{
    width: 30px;
    height: 100%;
    background: url("../../../assets/img/tick.png");
    position:relative;
}

.checkButton>div{
  width: 15px;
  height: 15px;
  border: 2px solid skyblue;
  border-radius:50%;
  margin: 0 auto;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
}
img{
  position: absolute;
  left: -1px;
  top: -1px;
  width: 15px;
  height: 15px;
}
</style>
