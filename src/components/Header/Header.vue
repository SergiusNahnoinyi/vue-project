<template>
  <header class="header">
    <Container>
      <router-link to="/">
        <Logo />
      </router-link>
    </Container>
  </header>
</template>

<script>
import { Container, Logo } from "../Common";

export default {
  name: "HeaderComponent",
  components: {
    Container,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.header {
  width: 100%;
  // margin-bottom: 60px;
  background: $secondary-color;
  padding: 16px 0;
}
</style>
