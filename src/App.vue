<template>
  <div id="app">
    <Container>
      <AppartmentsForm class="appartments-form" @submit="logger" />
    </Container>
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
    };
  },
  methods: {
    logger(value) {
      console.log(value, "---form value");
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
