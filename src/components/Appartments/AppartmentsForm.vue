<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model:city="city" class="form__select" />
    <CustomInput
      v-model:value="price"
      placeholder="Price from"
      class="form__input"
      error-message="Should not be empty"
      :rules="rules"
    />
    <Button type="submit" class="form__submit">Submit</Button>
  </form>
</template>

<script>
import { isRequired, charLimit } from "../../utils/validationRules";

import { CustomSelect } from "../Common";
import { CustomInput } from "../Common";
import { Button } from "../Common";

export default {
  components: {
    CustomSelect,
    CustomInput,
    Button,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)];
    },
    cities() {
      return [
        { value: "", label: "City", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  emits: ["submit"],
  methods: {
    handleSubmit() {
      this.$emit("submit", {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  &__select {
    margin: 0 0 30px 0;
  }
  &__submit {
    margin: 30px 0 0 0;
  }

  @media (min-width: 660px) {
    flex-direction: row;
    &__select {
      margin: 0 30px 0 0;
    }
    &__submit {
      margin: 0 0 0 30px;
    }
  }
}
</style>
