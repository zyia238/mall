<template>
  <div >
      <img v-for="(item,index) in imagesList" :key="index" :src="item" class="images">
  </div>
</template>

<script>
export default {
  name: 'detailImages',
  props:{
      imagesList:{
          type:Array,
          default(){
              return []
          }
      }
  },
  data () {
    return {}
  },
  
}
</script>

<style lang="" scoped>
.images{
    width: 100%;
}
</style>
