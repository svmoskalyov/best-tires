<script setup>
import { ref, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

import AppInput from './shared/AppInput.vue'
import AppButton from './shared/AppButton.vue'

const form = ref({
  emailField: '',
  passwordField: '',
  passwordVisible: false
})

const emit = defineEmits(['submit'])

function closeModal() {
  emit('submit')
}

const rules = computed(() => ({
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
  }
}))

const v$ = useVuelidate(rules, form)

const submitForm = () => {
  v$.value.$touch()
  if (v$.value.$error) return

  console.log({
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
      <h2 class="form-title">SignIn</h2>

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

      <AppButton
        label="SignIn"
        class="form-btn"
      />
    </form>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.form-title
  margin-bottom: 30px
  color: $accent
  font-size: 18px
  font-weight: 700
  text-align: center

.form-btn
  margin-top: 20px
  width: 100%
</style>
