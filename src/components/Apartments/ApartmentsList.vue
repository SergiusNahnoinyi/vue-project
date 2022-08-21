<template>
  <slot name="title"></slot>
  <div class="apartments-list">
    <template v-for="apartment in items">
      <slot name="apartment" v-bind:apartment="apartment"></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: "ApartmentsList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>
