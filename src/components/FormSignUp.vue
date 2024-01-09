<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, helpers, minLength, sameAs } from '@vuelidate/validators'

import AppInput from './shared/AppInput.vue'
import AppButton from './shared/AppButton.vue'

const form = ref({
  nameField: '',
  emailField: '',
  passwordField: '',
  confirmPasswordField: '',
  passwordVisible: false,
  confirmPasswordVisible: false
})

const emit = defineEmits(['submit'])

function closeModal() {
  emit('submit')
}

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

const v$ = useVuelidate(rules, form)

const submitForm = () => {
  v$.value.$touch()
  if (v$.value.$error) return

  console.log({
    name: form.value.nameField,
    email: form.value.emailField,
    password: form.value.passwordField
  })

  v$.value.$reset()
  form.value = form
  closeModal()
}
</script>

<template>
  <div class="form-wrapper">
    <form
      class="form"
      @submit.prevent="submitForm"
    >
      <h2 class="form__title">SignUp</h2>

      <AppInput
        v-model:value="v$.nameField.$model"
        label="Name"
        name="name"
        placeholder="Input your name"
        :error="v$.nameField.$errors"
        width=""
      />

      <AppInput
        v-model:value="v$.emailField.$model"
        label="Email"
        name="email"
        placeholder="Input your email"
        :error="v$.emailField.$errors"
        width=""
      />

      <AppInput
        v-model:value="v$.passwordField.$model"
        label="Password"
        name="password"
        placeholder="Please input password"
        :error="v$.passwordField.$errors"
        width=""
        :type="form.passwordVisible ? '' : 'password'"
      >
        <AppButton
          icon
          type="button"
          @click="form.passwordVisible = !form.passwordVisible"
        >
          <font-awesome-icon
            v-if="form.passwordVisible"
            :icon="['fas', 'eye']"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'eye-slash']"
          />
        </AppButton>
      </AppInput>

      <AppInput
        v-model:value="v$.confirmPasswordField.$model"
        label="Confirm password"
        name="confirm"
        placeholder="Please confirm password"
        :error="v$.confirmPasswordField.$errors"
        width=""
        :type="form.confirmPasswordVisible ? '' : 'password'"
      >
        <AppButton
          icon
          type="button"
          @click="form.confirmPasswordVisible = !form.confirmPasswordVisible"
        >
          <font-awesome-icon
            v-if="form.confirmPasswordVisible"
            :icon="['fas', 'eye']"
          />
          <font-awesome-icon
            v-else
            :icon="['fas', 'eye-slash']"
          />
        </AppButton>
      </AppInput>

      <AppButton
        label="SignUp"
        class="form__btn"
      />
    </form>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.form
  &__title
    margin-bottom: 30px
    color: $accent
    font-size: 18px
    font-weight: 700
    text-align: center

  &__btn
    margin-top: 20px
    width: 100%
</style>
