<template>
  <header class="header">
    <div class="header__container">
      <router-link to="/">
        <Logo />
      </router-link>
      <AccountActions v-if="isLoggedIn" />
      <AuthActions v-else />
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

import { Logo } from "../Common";
import AuthActions from "./AuthActions";
import AccountActions from "./AccountActions";

export default {
  name: "HeaderComponent",
  components: {
    Logo,
    AuthActions,
    AccountActions,
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.header {
  background: $secondary-color;
  &__container {
    width: 100%;
    max-width: 1150px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px 0 20px;
    margin: 0px auto 0px auto;
  }
}
</style>
