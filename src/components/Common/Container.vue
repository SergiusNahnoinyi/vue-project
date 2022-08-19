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
  padding: 0px 20px 0 20px;
  margin: 60px auto 100px auto;
}
</style>
