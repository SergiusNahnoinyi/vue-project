<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContainerDefault",
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1210px;
  margin: 0 auto;
}
</style>
