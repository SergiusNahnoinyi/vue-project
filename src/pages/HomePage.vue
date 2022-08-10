<template>
  <Container>
    <AppartmentsForm @submit="filter" />
    <p v-if="!filteredAppartments.length">Nothing found</p>
    <AppartmentsList v-else :items="filteredAppartments">
    <template v-slot:appartment="{ appartment }">
      <AppartmentsItem
        :id="appartment.id"
        :key="appartment.id"
        :title="appartment.title"
        :descr="appartment.descr"
        :rating="appartment.rating"
        :imgSrc="appartment.imgUrl"
        :price="appartment.price"
      />
    </template>
    </AppartmentsList>
  </Container>
</template>

<script>
import Container from "../components/Container";
import AppartmentsForm from "../components/AppartmentsForm";
import AppartmentsList from "../components/AppartmentsList";
import AppartmentsItem from "../components/AppartmentsItem";

import appartments from "../components/appartments.js";

export default {
  name: "App",
  components: {
    Container,
    AppartmentsForm,
    AppartmentsList,
    AppartmentsItem,
  },
  data() {
    return {
      appartments,
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredAppartments() {
      return this.filterByCityName(this.filterByPrice(this.appartments));
    },
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(appartments) {
      if (!this.filters.city) return appartments;

      return appartments.filter((appartment) => {
        return appartment.location.city === this.filters.city;
      });
    },
    filterByPrice(appartments) {
      if (!this.filters.price) return appartments;
      return appartments.filter((appartment) => {
        return appartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
