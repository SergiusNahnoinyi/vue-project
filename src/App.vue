<template>
  <h1>{{ title }}</h1>
  <ButtonDefault @click="increment" outlined>Click me</ButtonDefault>
  <StarRating :rating="4.6" />
  <AppartmentsList :items="appartments" />
</template>

<script>
import ButtonDefault from "./components/Button";
import StarRating from "./components/StarRating";
import AppartmentsList from "./components/AppartmentsList";
import appartments from "./components/appartments.js";

export default {
  name: "App",
  components: {
    ButtonDefault,
    StarRating,
    AppartmentsList,
  },
  data() {
    return {
      amountOfClicks: 0,
      appartments,
      appartment: {
        id: "5f05c9dad2c9bc0f773444bc",
        title:
          "Aut qui adipisci distinctio maiores molestiae sit est inventore vero.",
        descr:
          "Non perferendis rerum a in nisi exercitationem dolorum perferendis. Eligendi sit error sed a. Facere maiores sit adipisci sequi eveniet. Qui est voluptatum maiores eos qui vitae.",
        price: 2032,
        rating: 4.7,
        location: {
          city: "Kherson",
        },
        owner: {
          name: "Sergius",
          phone: "111-222-3333",
          email: "sergius@mail.com",
        },
      },
    };
  },
  computed: {
    title() {
      return `Amount of clicks ${this.amountOfClicks}`;
    },
  },
  methods: {
    increment() {
      this.amountOfClicks += 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
