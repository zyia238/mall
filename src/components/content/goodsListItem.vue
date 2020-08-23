<template>
  <div class="goodslistitem" @click="itemClick">
      <a>
      <img :src="goodsitem.show.img" @load="imgload" alt="">
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
  name: 'goodsListItem',
    props:{
        goodsitem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgload(){
            // this.$emit('imgload')
            this.$bus.$emit('imgload');
        },
        itemClick(){
            this.$router.push('/detail/' + this.goodsitem.iid)
        }
    }
}
</script>

<style lang="" scoped>
.goodslistitem{
    width: 46%;
    z-index: 1
}

.goodslistitem img{
    width: 100%;
}
</style>
