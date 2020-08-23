<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="mid">
      <slot name="mid"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style lang="" scoped>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.left {
  width: 60px;
}

.right {
  width: 60px;
}

.mid {
  flex: 1;
}
</style>
