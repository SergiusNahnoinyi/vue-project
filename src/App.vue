<template>
  <div id="app">
    <Container>
      <AppartmentsForm class="appartments-form" @submit="filter" />
    </Container>
    <p v-if="!filteredAppartments.length">Nothing found</p>
    <AppartmentsList v-else :items="filteredAppartments">
      <template v-slot:appartment="{ appartment }">
        <AppartmentsItem
          :key="appartment.id"
          :descr="appartment.descr"
          :rating="appartment.rating"
          :imgSrc="appartment.imgUrl"
          :price="appartment.price"
        />
      </template>
    </AppartmentsList>
  </div>
</template>

<script>
import Container from "./components/Container";
import AppartmentsForm from "./components/AppartmentsForm";
import appartments from "./components/appartments.js";
import AppartmentsList from "./components/AppartmentsList";
import AppartmentsItem from "./components/AppartmentsItem";

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
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.appartments-form {
  margin-bottom: 40px;
}
</style>
