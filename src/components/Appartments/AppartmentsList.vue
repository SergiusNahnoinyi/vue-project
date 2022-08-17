<template>
    <slot name="title"></slot>
    <div class="appartments-list">
      <template v-for="appartment in items">
        <slot name="appartment" v-bind:appartment="appartment"></slot>
      </template>
    </div>
</template>

<script>
export default {
  name: "AppartmentsList",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.appartments-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 30px;
  margin-left: auto;
  margin-right: auto;
}
</style>
