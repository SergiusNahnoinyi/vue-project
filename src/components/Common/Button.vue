<template>
  <button
    v-bind:type="type"
    :disabled="loading"
    :class="{ btn: true, 'btn--outlined': outlined }"
  >
    <Loader v-if="loading" width="38" height="38" class="btn__loader" />
    <span class="btn__content" :class="contentStyle">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import Loader from "../Loader";

export default {
  name: "ButtonDefault",
  components: {
    Loader,
  },
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    contentStyle() {
      return {
        "btn__content--hidden": this.loading,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  position: relative;
  display: inline-block;
  font-size: 18px;
  background: #ff662d;
  color: #fff;
  cursor: pointer;
  min-width: 220px;
  border: 1px solid transparent;
  padding: 8px 15px;
  transition: background-color 0.4s, color 0.4s;
  &:hover {
    background: #fff;
    color: #ff662d;
    border: 1px solid #ff662d;
  }
  &--outlined {
    background: none;
    border: 1px solid #ff662d;
    color: #ff662d;
  }
  &__content {
    &--hidden {
      opacity: 0;
    }
  }
  &__loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
