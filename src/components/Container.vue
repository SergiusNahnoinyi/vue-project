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
  max-width: 1150px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
