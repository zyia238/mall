<template>
  <div id="tabbaritem" @click="itemClick">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabbaritem',
  props:['path'],
  methods:{
      itemClick(){
          this.$router.push(this.path)
      }
  }
}
</script>

<style scoped>

</style>