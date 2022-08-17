<template>
  <input
    class="custom-input"
    :value="price"
    @input="handleInput"
    v-bind="$attrs"
  />
</template>

<script>
export default {
  name: "CustomInput",
  inheritAttrs: false,
  props: {
    price: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["update:price"],
  methods: {
    handleInput(event) {
      this.$emit("update:price", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables.scss";

.custom-input {
  height: 40px;
  max-width: 280px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;
  &::placeholder {
    color: inherit;
  }
}
</style>
