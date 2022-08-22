<template>
  <Container>
    <h1 class="title">Error 404: Page Not Found</h1>
  </Container>
</template>

<script>
import { Container } from "../components/Common";

export default {
  name: "ErrorPage",
  components: {
    Container,
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 60px;
  text-align: center;
}
</style>
