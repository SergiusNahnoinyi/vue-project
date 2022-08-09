<template>
  <Container>
    <slot name="title"></slot>
    <div class="appartments-list">
      <template v-for="appartment in items">
        <slot name="appartment" v-bind:appartment="appartment"></slot>
      </template>
    </div>
  </Container>
</template>

<script>
import Container from "./Container";
export default {
  name: "AppartmentsList",
  components: {
    Container,
  },
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
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
}
</style>
