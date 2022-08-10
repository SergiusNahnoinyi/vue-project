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
  </article>
</template>

<script>
import StarRating from './StarRating.vue';
export default {
  name: 'AppartmentsMain',
  components: {
    StarRating,
  },
  props: {
    appartment: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
.appartments-info {
  max-width: 730px;
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
}
</style> 