<template>
  <Container>
    <h1 class="signin">Sign in to your account</h1>
    <Form @submit.prevent="handleSubmit">
      <CustomInput
        v-model:value="formData.email"
        name="email"
        :rules="emailRules"
      />
      <CustomInput
        v-model:value="formData.password"
        name="password"
        :rules="passwordRules"
      />
      <Button type="submit">Submit</Button>
    </Form>
  </Container>
</template>

<script>
import { Container, Form, CustomInput, Button } from "../components/Common";

import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../utils/validationRules";

export default {
  name: "SignInPage",
  components: {
    Container,
    Form,
    CustomInput,
    Button,
  },
  data() {
    return {
      inputs: [],
      formData: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
  },
  emits: ["submit"],
  methods: {
    handleSubmit() {
      this.$emit("submit", console.log(this.formData));
    },
  },
};
</script>

<style lang="scss" scoped></style>
