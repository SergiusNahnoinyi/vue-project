<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Overall rating</h2>
      <div class="reviews__rating">
        <span>{{ reviewsCount }} review(s)</span>
        <StarRating :rating="totalRating" />
      </div>
    </div>
    <ReviewsItem
      v-for="review in currentReviews"
      :key="review.id"
      :review="review"
    />
    <button class="reviews__show-more" @click="toggleReviews">
      {{ buttonText }}
    </button>
  </section>
</template>

<script>
import ReviewsItem from "./ReviewsItem.vue";
import { StarRating } from "../Common";

export default {
  name: "ReviewsList",
  components: {
    ReviewsItem,
    StarRating,
  },
  props: {
    reviews: {
      type: Array,
      required: true,
    },
    appartment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      reviewsLimit: 2,
    };
  },
  computed: {
    reviewsCount() {
      return this.reviews.length;
    },
    totalRating() {
      return this.appartment.rating;
    },
    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },
    buttonText() {
      return this.reviews.length === this.reviewsLimit
        ? "Collapse"
        : "Read more...";
    },
  },
  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
      } else {
        this.reviewsLimit = this.reviews.length;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  &__heading {
    padding: 20px;
    background-color: #e1efff;
  }
  &__title {
    margin-bottom: 7px;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
  }
  &__rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__show-more {
    width: 100%;
    padding: 14px;
    border: none;
    background-color: #e1efff;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
  }
}
</style>
