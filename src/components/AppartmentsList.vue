<template>
  <Container>
    <div class="appartments-list">
      <AppartmentsItem
        v-for="{ id, descr, rating, imgUrl, price } in items"
        :key="id"
        :descr="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
        class="appartments-list__item"
      />
    </div>
  </Container>
</template>

<script>
import AppartmentsItem from "./AppartmentsItem";
import Container from "./Container";
export default {
  name: "AppartmentsList",
  components: {
    AppartmentsItem,
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
  &__item {
    margin-bottom: 30px;
  }
}
</style>
