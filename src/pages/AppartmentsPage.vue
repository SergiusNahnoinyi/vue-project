<template>
  <Container>
    <AppartmentsInfo :appartment="appartment" />
    <AppartmentsOwner
      :owner="appartment.owner"
      class="appartments-page__owner"
    />
  </Container>
</template>

<script>
import Container from '../components/Container.vue';
import AppartmentsInfo from '../components/AppartmentsInfo.vue';
import AppartmentsOwner from '../components/AppartmentsOwner.vue';

import appartments from "../components/appartments.js";

export default {
  name: 'AppartmentsPage',
  components: {
    Container,
    AppartmentsInfo,
    AppartmentsOwner,
  },
  computed: {
    appartment() {
      return appartments.find((appartment) => appartment.id === this.$route.params.id)
    }
  },
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.$route.query.name);
  },
  };
</script>

<style lang='scss' scoped>
.appartments-page {
  padding-bottom: 55px;
  &__content {
    display: flex;
    align-items: flex-start;
  }
  // &__owner {
  //   min-width: 280px;
  //   margin-left: 30px;
  // }
}
</style> 