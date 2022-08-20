<template>
  <AuthSection class="login">
    <Form class="login__form" @submit.prevent="handleSubmit">
      <h1 class="login__title">Log in to your account</h1>
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
      <Button class="login__button" type="submit" :loading="loading">
        Log in
      </Button>
    </Form>
  </AuthSection>
</template>

<script>
import { Form, CustomInput, Button } from "../components/Common";
import AuthSection from "../components/Auth";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../utils/validationRules";

export default {
  name: "LogInPage",
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
        await this.$store.dispatch("login", this.formData);
        this.$router.push({ name: "HomePage" });
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
.login {
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
