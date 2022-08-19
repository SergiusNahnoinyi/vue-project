<template>
  <AuthSection class="signin">
    <Form class="signin__form" @submit.prevent="handleSubmit">
      <h1 class="signin__title">Sign in to your account</h1>
      <CustomInput
        placeholder="Email"
        v-model:value="formData.email"
        name="email"
        :rules="emailRules"
      />
      <CustomInput
        placeholder="Password"
        v-model:value="formData.password"
        v-bind:style="{ 'margin-top': '25px' }"
        name="password"
        :rules="passwordRules"
      />
      <Button class="signin__button" type="submit" :loading="loading">
        Sign in
      </Button>
    </Form>
  </AuthSection>
</template>

<script>
import { Form, CustomInput, Button } from "../components/Common";
import AuthSection from "../components/Auth";
import { loginUser } from "../services/appartmentsService";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../utils/validationRules";

export default {
  name: "SignInPage",
  components: {
    AuthSection,
    Form,
    CustomInput,
    Button,
  },
  data() {
    return {
      loading: false,
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
    async handleSubmit() {
      try {
        this.loading = true;
        const { data } = await loginUser(this.formData);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.signin {
  &__form {
    display: flex;
    flex-direction: column;
    max-width: 320px;
    width: 100%;
    padding: 20px;
    background: #fff;
  }
  &__title {
    margin-bottom: 18px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
  &__button {
    margin-top: 40px;
  }
}
</style>
