<template>
  <h2>{{ text }}</h2>
  <div class="actions">
    <CustomSelect :items="['name', 'label', 'salary']" />
    <CustomInput v-model="text" />
  </div>
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
import CustomInput from "./components/CustomInput";
import CustomSelect from "./components/CustomSelect";
import appartments from "./components/appartments.js";

export default {
  name: "App",
  components: {
    AppartmentsList,
    AppartmentsItem,
    CustomInput,
    CustomSelect,
  },
  data() {
    return {
      text: "",
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
.actions {
  display: flex;
}
</style>
