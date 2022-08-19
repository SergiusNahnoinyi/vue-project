<template>
  <footer class="footer"></footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  background: $secondary-color;
  height: 30px;
}
</style>
