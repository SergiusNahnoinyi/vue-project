<template>
  <Header />
  <main class="main">
    <router-view></router-view>
  </main>
  <Footer />
</template>

<script>
import { mapGetters } from "vuex";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
  },
  mounted() {
    console.log(this.isLoggedIn);
  },
};
</script>

<style lang="scss" scoped></style>
