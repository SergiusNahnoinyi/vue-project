<template>
  <input class="custom-input" />
</template>

<script>
export default {
  name: "CustomInput",
  computed: {
    listeners() {
      return {
        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";
.custom-input {
  height: 40px;
  max-width: 220px;
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
