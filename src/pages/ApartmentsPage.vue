<template>
  <Container v-if="apartment" class="apartments-page">
    <ApartmentsInfo :apartment="apartment" />
    <div class="apartments-page__reviews">
      <ApartmentsOwner
        :owner="apartment.owner"
        class="apartments-page__owner"
      />
      <ReviewsList :reviews="reviews" :apartment="apartment" />
    </div>
  </Container>
</template>

<script>
import { getApartmentById } from "../services/apartmentsService";

import { Container } from "../components/Common";
import { ApartmentsInfo, ApartmentsOwner } from "../components/Apartments";
import { ReviewsList } from "../components/Reviews";

export default {
  name: "ApartmentsPage",
  components: {
    Container,
    ApartmentsInfo,
    ApartmentsOwner,
    ReviewsList,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviews() {
      return this.apartment.reviews;
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);
      this.apartment = data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.apartments-page {
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
