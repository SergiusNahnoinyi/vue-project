<template>
  <Container>
    <section class="orders">
      <h1 class="orders__title">Orders history</h1>
      <OrdersList :items="orders" />
    </section>
  </Container>
</template>

<script>
import { Container } from "../components/Common";
import OrdersList from "../components/Orders";
import { getOrders } from "../services/apartmentsService";

export default {
  name: "MyOrdersPage",
  components: {
    Container,
    OrdersList,
  },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    try {
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.orders {
  max-width: 730px;
  margin: 0 auto;
  &__title {
    text-align: center;
  }
}
</style>
