<template>
  <div>
      <nav-bar class="detailnavbar">
          <div slot="left" class="left"
          @click ='backClick'>&lt;</div>

          <div slot="mid" class="mid">
              <div v-for="(item, index) in titles" :key="index">
                  <span :class = "{active: index === currentIndex}"
                  @click = 'tabClick(index)'>{{item}}</span>
              </div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import navBar from '../../../components/common/navbar'
export default {
  name: 'detailNavBar',
  data(){
      return {
          currentIndex:0,
          titles:['商品','参数','评论','推荐']
      }
  },
  methods:{
      tabClick(index){
          this.currentIndex = index;
      },
      backClick(){
          this.$router.go(-1)
      }
  },
  components:{
      navBar
  }
}
</script>

<style lang="" scoped>
.detailnavbar{
    position: relative;
    z-index: 999;
    background:#fff;
}
.mid {
    display: flex;
}

.mid div {
    flex: 1;
    font-size: 13px;
}

.active {
    color: skyblue;
}

.left{
    font-size: 20px;
    color: pink
}
</style>
