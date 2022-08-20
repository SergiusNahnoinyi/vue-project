<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/">
        <Logo />
      </router-link>
    </div>
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
  height: 60px;
  display: flex;
  align-items: center;
  background: $secondary-color;
  &__container {
    width: 100%;
    max-width: 1150px;
    padding: 0px 20px 0 20px;
    margin: 0px auto 0px auto;
  }
}
</style>
