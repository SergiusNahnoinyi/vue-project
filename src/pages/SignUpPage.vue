<template>
  <AuthSection class="signup">
    <Form class="signup__form" @submit.prevent="handleSubmit">
      <h1 class="signup__title">Sign up into your account</h1>
      <CustomInput
        placeholder="Name"
        v-model:value="formData.name"
        name="name"
        :rules="nameRules"
      />
      <CustomInput
        placeholder="Email"
        v-model:value="formData.email"
        v-bind:style="{ 'margin-top': '25px' }"
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
      <CustomInput
        v-model:value="formData.confirmPassword"
        placeholder="Confirm password"
        v-bind:style="{ 'margin-top': '35px' }"
        name="confirmPassword"
        :rules="confirmPassword"
      />
      <Button class="signup__button" type="submit" :loading="loading">
        Sign up
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
import { mapActions } from "vuex";

export default {
  name: "SignUpPage",
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
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (value) => ({
          hasPassed: value === this.formData.password,
          message: "Passwords don't match!",
        }),
      ];
    },
  },
  emits: ["submit"],
  methods: {
    ...mapActions("auth", ["signup"]),
    async handleSubmit() {
      const { name, password, email } = this.formData;
      try {
        this.loading = true;
        await this.signup({ name, password, email });
        this.$router.push({ name: "HomePage" });
      } catch (error) {
        this.$notify({
          type: "error",
          title: "Error",
          text: error.message,
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.signup {
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
