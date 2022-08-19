<template>
  <header class="header">
    <router-link to="/">
      <Logo />
    </router-link>
  </header>
</template>

<script>
import { Logo } from "../Common";

export default {
  name: "HeaderComponent",
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 20px 0 20px;
  margin: 0px auto 0px auto;
  background: $secondary-color;
}
</style>
