<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import {
  required,
  helpers,
  minLength,
  email,
  sameAs
} from '@vuelidate/validators'

import AppInput from './shared/AppInput.vue'
import AppButton from './shared/AppButton.vue'

const nameField = ref('')
const emailField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')

const rules = computed(() => ({
  // nameField: {
  //   required: helpers.withMessage('This field cannot be empty', required),
  //   minLength: helpers.withMessage(`Minimum length: 3 characters`, minLength(3))
  // },
  nameField: {
    minLength: helpers.withMessage(
      ({ $pending, $invalid, $params, $model }) =>
        `This field has a value of '${$model}' but must have a min length of ${
          $params.min
        } so it is ${$invalid ? 'invalid' : 'valid'}`,
      minLength(4)
    )
  },
  emailField: {
    required: helpers.withMessage('This field cannot be empty', required),
    email: helpers.withMessage('Not correct email', email)
  },
  passwordField: {
    required: helpers.withMessage('This field cannot be empty', required),
    password: helpers.withMessage('Not correct password', minLength(3))
  },
  confirmPasswordField: {
    required: helpers.withMessage('This field cannot be empty', required),
    sameAsPassword: helpers.withMessage(
      `Passwords do not match`,
      sameAs(passwordField.value)
    )
  }
}))

const v$ = useVuelidate(rules, {
  nameField,
  emailField,
  passwordField,
  confirmPasswordField
})

const submitForm = () => {
  v$.value.$touch()
  if (v$.value.$error) return

  console.log({
    name: nameField.value,
    email: emailField.value,
    password: passwordField.value
  })

  nameField.value = ''
}
</script>

<template>
  <div>
    <h2 class="title-form">SignUp</h2>

    <form @submit.prevent="submitForm">
      <AppInput
        v-model:value="v$.nameField.$model"
        label="Name"
        name="name"
        placeholder="Input your name"
        :error="v$.nameField.$errors"
        autocomplete="off"
      />

      <AppInput
        v-model:value="v$.emailField.$model"
        label="Email"
        name="email"
        placeholder="Input your email"
        :error="v$.emailField.$errors"
        autocomplete="off"
      />

      <AppInput
        v-model:value="v$.passwordField.$model"
        label="Password"
        name="password"
        placeholder="Please input password"
        :error="v$.passwordField.$errors"
        type="password"
      />

      <AppInput
        v-model:value="v$.confirmPasswordField.$model"
        label="Confirm password"
        name="confirm"
        placeholder="Please confirm password"
        :error="v$.confirmPasswordField.$errors"
        type="password"
      />

      <AppButton label="SignUp" />
    </form>
  </div>
</template>

<style lang="sass" scoped>
.title-form
  margin: 20px auto
</style>
