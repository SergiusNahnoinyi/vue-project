<template>
  <AppartmentsList :items="appartments">
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
</template>

<script>
import AppartmentsList from "./components/AppartmentsList";
import AppartmentsItem from "./components/AppartmentsItem";
import appartments from "./components/appartments.js";

export default {
  name: "App",
  components: {
    AppartmentsList,
    AppartmentsItem,
  },
  data() {
    return {
      appartments,
    };
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
