<template>
  <article class="apartments-info">
    <div class="apartments-info__heading">
      <h1 class="apartments-info__title">{{ apartment.title }}</h1>
      <StarRating :rating="apartment.rating" />
    </div>
    <img
      :src="apartment.imgUrl"
      :alt="apartment.title"
      :title="apartment.title"
      class="apartments-info__photo"
    />
    <p class="apartments-info__description">{{ apartment.descr }}</p>
    <div class="apartments-info__btn">
      <Button @click="handleApartmentsBooking" :loading="loading">Book</Button>
    </div>
  </article>
</template>

<script>
import { StarRating, Button } from "../Common";
import { bookApartment } from "../../services/apartmentsService";

export default {
  name: "ApartmentsMain",
  components: {
    StarRating,
    Button,
  },
  props: {
    apartment: {
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
    async handleApartmentsBooking() {
      const body = {
        apartmentId: this.$route.params.id,
        date: Date.now(),
      };
      try {
        this.loading = true;
        await bookApartment(body);
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
        this.$notify({
          type: "success",
          title: "Success",
          text: "You have successfully booked an apartment",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-info {
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
    width: 100%;
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
