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
  nameField: {
    required,
    minLength: helpers.withMessage(`Minimum length: 3 characters`, minLength(3))
  },
  emailField: {
    required,
    email: helpers.withMessage('Not correct email', email)
  },
  confirmPasswordField: {
    required,
    sameAsPassword: helpers.withMessage(
      `Passwords do not match`,
      sameAs(passwordField.value)
    )
  }
}))

const v$ = useVuelidate(rules, {
  nameField,
  emailField,
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
      />

      <AppInput
        v-model:value="v$.emailField.$model"
        label="Email"
        name="email"
        placeholder="Input your email"
        :error="v$.emailField.$errors"
      />

      <AppInput
        v-model:value="passwordField"
        label="Password"
        name="password"
        placeholder="Please input password"
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
