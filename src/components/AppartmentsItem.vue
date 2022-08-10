<template>
  <div class="appartments-item">
    <div class="appartments-item__inner">
      <img :src="imgSrc" alt="" class="appartments-item__photo" />
      <div class="appartments-item__content">
        <p class="appartments-item__description">
          {{ descr }}
        </p>
        <div class="appartments-item__rating">
          <StarRating :rating="rating" />
        </div>
        <div class="appartments-item__price">UAH {{ price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "./StarRating";
export default {
  name: "AppartmentsItem",
  components: {
    StarRating,
  },
  props: {
    descr: {
      type: String,
      default: "",
    },
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    imgSrc: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.appartments-item {
  position: relative;
  &__inner {
    position: relative;
  }
  &__content {
    position: relative;
    padding: 20px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(#0f1d2d, 0.7);
    aspect-ratio: 1/0.75;
    color: #fff;
    text-align: left;
    line-height: 1.4;
    cursor: pointer;
    z-index: 1;
    &:hover {
      opacity: 1;
    }
  }
  &__description {
    margin-bottom: 20px;
    max-height: calc(1em * 1.4 * 3);
    overflow: hidden;
  }
  &__rating {
    margin-bottom: 20px;
  }
  &__price {
    font-size: 20px;
    font-weight: 600;
  }
  &__photo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
