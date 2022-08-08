<template>
  <h1>{{ title }}</h1>
  <ButtonDefault @click="increment" outlined>Click me</ButtonDefault>
  <StarRating :rating="4.6" />
  <AppartmentsItem
    :descr="appartment.descr"
    :price="appartment.price"
    :rating="appartment.rating"
    imgSrc="https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2019/CA-Chris-Ogonek-Picture-Controls/Media/Chris-Ogonek-Picture-Controls-Vivid.jpg"
  />
</template>

<script>
import ButtonDefault from "./components/Button";
import StarRating from "./components/StarRating";
import AppartmentsItem from "./components/AppartmentsItem";

export default {
  name: "App",
  components: {
    ButtonDefault,
    StarRating,
    AppartmentsItem,
  },
  data() {
    return {
      amountOfClicks: 0,
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
