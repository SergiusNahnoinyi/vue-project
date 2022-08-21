<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Owner's info:</h2>
    <p class="apartments-owner__name">Name: {{ owner.name }}</p>
    <p class="apartments-owner__phone">Tel: {{ owner.phone }}</p>
    <p class="apartments-owner__email">Email: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: "ApartmentsOwner",
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-owner {
  padding: 20px;
  background-color: #e1efff;
  &__title {
    margin-bottom: 19px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
  }
}
</style>
