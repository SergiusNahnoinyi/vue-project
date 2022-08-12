<template>
  <div class="reviews-heading">
    <Avatar class="reviews-heading__avatar" />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ author }}</span>
    </div>
  </div>
</template>

<script>
import Avatar from "./ReviewsAvatar.vue";

export default {
  name: "ReviewsHeading",
  components: {
    Avatar,
  },
  props: {
    author: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  &__avatar {
    margin-right: 17px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
}
</style> 