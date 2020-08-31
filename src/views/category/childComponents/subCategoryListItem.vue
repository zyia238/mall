<template>
  <div class="item">
    <a :href="subsItem.link">
      <img :src="subsItem.image" @load="subsImageLoad"/>
      <span>{{subsItem.title}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "subCategoryListItem",
  props: {
    subsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    subsImageLoad(){
      this.$bus.$emit('subsImageLoad')
    }
  }
};
</script>

<style lang="" scoped>
.item {
  width: 33%;
  text-align: center;
  background:white;
}

img {
  width: 100%;
}

</style>
