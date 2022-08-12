<template>
  <Container v-if="appartment" class="appartments-page">
    <AppartmentsInfo :appartment="appartment" />
    <div class="appartments-page__reviews">
      <AppartmentsOwner
        :owner="appartment.owner"
        class="appartments-page__owner"
      />
      <ReviewsList :reviews="reviews" :appartment="appartment" />
    </div>
  </Container>
</template>

<script>
import { getAppartmentById } from "../services/appartmentsService";

import Container from "../components/Container.vue";
import AppartmentsInfo from "../components/AppartmentsInfo.vue";
import AppartmentsOwner from "../components/AppartmentsOwner.vue";
import ReviewsList from "../components/ReviewsList.vue";

export default {
  name: "AppartmentsPage",
  components: {
    Container,
    AppartmentsInfo,
    AppartmentsOwner,
    ReviewsList,
  },
  data() {
    return {
      appartment: null,
    };
  },
  computed: {
    reviews() {
      return this.appartment.reviews;
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getAppartmentById(id);
      this.appartment = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang='scss' scoped>
.appartments-page {
  display: flex;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  &__reviews {
    display: flex;
    flex-direction: column;
    margin-top: 44px;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
  &__owner {
    margin-bottom: 20px;
  }
}
</style> 