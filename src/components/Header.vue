<template>
  <header class="header">
    <Container>
      <Logo />
    </Container>
  </header>
</template>

<script>
import Container from './Container'
import Logo from './Logo'
export default {
  name: 'HeaderComponent',
  components: {
    Container,
    Logo
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables.scss';
.header {
  width: 100%;
  background: $secondary-color;
  padding: 16px 0;
}
</style> 