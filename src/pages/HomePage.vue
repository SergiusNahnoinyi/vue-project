<template>
  <Container>
    <ApartmentsForm @submit="filter" />
    <p v-if="!filteredApartments.length">Nothing found</p>
    <ApartmentsList v-else :items="filteredApartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :id="apartment.id"
          :key="apartment.id"
          :title="apartment.title"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
        />
      </template>
    </ApartmentsList>
  </Container>
</template>

<script>
import { getApartmentsList } from "../services/apartmentsService";

import { Container } from "../components/Common";
import {
  ApartmentsForm,
  ApartmentsList,
  ApartmentsItem,
} from "../components/Apartments";

export default {
  name: "App",
  components: {
    Container,
    ApartmentsForm,
    ApartmentsList,
    ApartmentsItem,
  },
  data() {
    return {
      apartments: [],
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },
  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    filter({ city, price }) {
      this.filters.city = city;
      this.filters.price = price;
    },
    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },
    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;
      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
