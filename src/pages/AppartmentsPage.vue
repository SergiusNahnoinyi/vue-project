<template>
  <Container class="appartments-page">
    <AppartmentsInfo :appartment="appartment" />
    <div class="appartments-page__reviews">
      <AppartmentsOwner
        :owner="appartment.owner"
        class="appartments-page__owner"
      />
      <ReviewsList :reviews="reviews" />
    </div>
  </Container>
</template>

<script>
import Container from '../components/Container.vue';
import AppartmentsInfo from '../components/AppartmentsInfo.vue';
import AppartmentsOwner from '../components/AppartmentsOwner.vue';
import ReviewsList from '../components/ReviewsList.vue';

import appartments from "../components/appartments.js";
import reviews from "../components/reviews.json";

export default {
  name: 'AppartmentsPage',
  components: {
    Container,
    AppartmentsInfo,
    AppartmentsOwner,
    ReviewsList,
  },
  computed: {
    appartment() {
      return appartments.find((appartment) => appartment.id === this.$route.params.id)
    },
    reviews() {
      return reviews;
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    console.log(this.$route.query.name);
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