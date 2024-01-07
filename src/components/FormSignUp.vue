<script setup>
import { ref, computed, reactive } from 'vue'
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

// const initialState = {
//   nameField: '',
//   emailField: '',
//   passwordField: '',
//   confirmPasswordField: ''
// }

// const form = reactive({ ...initialState })

// function resetForm() {
//   Object.assign(form, initialState)
// }

const form = ref({
  nameField: '',
  emailField: '',
  passwordField: '',
  confirmPasswordField: ''
})

function resetForm() {
  // form.value = { ...form }
  form.value = form
}

// const nameField = ref('')
// const emailField = ref('')
// const passwordField = ref('')
// const confirmPasswordField = ref('')

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage('This field cannot be empty', required),
    minLength: helpers.withMessage(
      ({ $invalid, $params, $model }) =>
        `This field has a value of '${$model}' but must have a min length of ${
          $params.min
        } so it is ${$invalid ? 'invalid' : 'valid'}`,
      minLength(3)
    )
  },
  emailField: {
    required: helpers.withMessage('This field cannot be empty', required),
    email: helpers.withMessage(
      'Email address must be a valid address',
      helpers.regex(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
    )
  },
  passwordField: {
    required: helpers.withMessage('This field cannot be empty', required),
    password: helpers.withMessage(
      'Password must contain at least 1 Uppercase, 1 Lowercase, 1 number, 1 special character and min 8 characters max 22',
      helpers.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[#$^+=!*()@%&]).{8,22}$/)
    )
  },
  confirmPasswordField: {
    required: helpers.withMessage('This field cannot be empty', required),
    sameAsPassword: helpers.withMessage(
      `Passwords do not match`,
      sameAs(form.value.passwordField)
    )
  }
}))

// const v$ = useVuelidate(rules, {
//   nameField,
//   emailField,
//   passwordField,
//   confirmPasswordField
// })

const v$ = useVuelidate(rules, form)

const submitForm = () => {
  v$.value.$touch()
  if (v$.value.$error) return

  // console.log({
  //   name: nameField.value,
  //   email: emailField.value,
  //   password: passwordField.value
  // })

  console.log({
    name: form.value.nameField,
    email: form.value.emailField,
    password: form.value.passwordField
  })

  v$.value.$reset()
  resetForm()
}
</script>

<template>
  <div class="form-wrapper">
    <h2 class="title-form">SignUp</h2>

    <form
      class="form"
      @submit.prevent="submitForm"
    >
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
