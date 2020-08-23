<template>
  <div class="recommends">
    <div v-for="item in recommends" :key="item.background">
        <a :href="item.link">
            <img :src="item.image" >
            <h3>{{item.title}}</h3>
        </a>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'recommends',
  props:{
      recommends:{
          type:Array,
          default(){
              return []
          }
      }
  }
}
</script>

<style scoped>
.recommends {
    display: flex;
    width: 100%;
}

.recommends>div{
    flex:1;
    text-align: center;
}

.recommends>div img{
    width: 70px!important;
}


</style>
