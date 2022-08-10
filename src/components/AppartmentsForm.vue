<template>
  <form class="form" @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model:city="city" class="form__select" />
    <CustomInput type="number" v-model:price="price" placeholder="Price from" class="form__input"/>
    <SubmitButton type="submit" class="form__submit">Submit</SubmitButton>
  </form>
</template>

<script>
import CustomSelect from "./CustomSelect";
import CustomInput from "./CustomInput";
import SubmitButton from "./Button";
export default {
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
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
  &__input {
    margin: 0 0 30px 0;
  }
  &__submit {
  margin-left: 0;
  }

  @media (min-width: 660px) {  
    flex-direction: row;
    &__select {
      margin: 0 30px 0 0;
    }
    &__input {
      margin: 0 30px 0 0;
    }
    &__submit {
      margin-left: auto;
    }
  }
}
</style>
