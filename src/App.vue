<template>
  <h1>{{ title }}</h1>
  <ButtonDefault @click="increment" outlined>Click me</ButtonDefault>
  <StarRating :rating="4.6" />
</template>

<script>
import ButtonDefault from "./components/Button";
import StarRating from "./components/StarRating";

export default {
  name: "App",
  components: {
    ButtonDefault,
    StarRating,
  },
  data() {
    return {
      amountOfClicks: 0,
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
