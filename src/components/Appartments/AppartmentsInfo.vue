<template>
  <article class="appartments-info">
    <div class="appartments-info__heading">
      <h1 class="appartments-info__title">{{ appartment.title }}</h1>
      <StarRating :rating="appartment.rating" />
    </div>
    <img
      :src="appartment.imgUrl"
      :alt="appartment.title"
      :title="appartment.title"
      class="appartments-info__photo"
    />
    <p class="appartments-info__description">{{ appartment.descr }}</p>
    <div class="appartments-info__btn">
      <Button @click="handleAppartmentsBooking" :loading="loading">Book</Button>
    </div>
  </article>
</template>

<script>
import { StarRating, Button } from "../Common";
import { bookAppartment } from "../../services/appartmentsService";

export default {
  name: "AppartmentsMain",
  components: {
    StarRating,
    Button,
  },
  props: {
    appartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async handleAppartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now(),
      };
      try {
        this.loading = true;
        await bookAppartment(body);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.appartments-info {
  @media (min-width: 768px) {
    max-width: fit-content;
    margin-right: 20px;
  }
  &__heading {
    display: flex;
    align-items: baseline;
    margin-bottom: 20px;
  }
  &__title {
    margin-right: 20px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: capitalize;
  }
  &__photo {
    display: block;
    max-width: 100%;
    margin-bottom: 30px;
  }
  &__description {
    font-weight: 500;
    line-height: 1.2;
  }
  &__btn {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
