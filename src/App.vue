<template>
    <Header />
    <main class="main">
      <router-view></router-view>
    </main>
    <Footer />
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-bottom: 100px;
}
</style>
