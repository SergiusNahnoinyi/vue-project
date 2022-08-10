<template>
  <Container><h1>Appartments page</h1></Container>
</template>

<script>
import Container from '../components/Container.vue';
export default {
  name: 'AppartmentsPage',
  components: {
    Container,
  },
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.$route.query.name);
  },
};
</script>

<style lang='scss' scoped>
</style> 