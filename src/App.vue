<template>
  <ButtonDefault>Click me</ButtonDefault>
</template>

<script>
import ButtonDefault from "./components/Button";

export default {
  name: "App",
  components: {
    ButtonDefault,
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
