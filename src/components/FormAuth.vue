<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'

import { useAuthStore } from '@/stores/auth'
import { ROUTES_PATHS } from '@/constants/router'

import AppInput from './shared/AppInput.vue'
import AppButton from './shared/AppButton.vue'
import AppModal from './shared/AppModal.vue'

const route = useRoute()
const router = useRouter()
const emit = defineEmits(['submit'])
const authStore = useAuthStore()
const props = defineProps({
  title: {
    type: String,
    default: 'Title'
  },
  lableBtn: {
    type: String,
    default: 'Submit'
  }
})
// const showModal = ref(true)
const form = ref({
  emailField: '',
  passwordField: '',
  passwordVisible: false
})

// function closeModal() {
//   emit('submit')
// }

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

const submitForm = async () => {
  v$.value.$touch()
  if (v$.value.$error) return

  await authStore.auth(
    {
      email: form.value.emailField,
      password: form.value.passwordField
    },
    route.path === ROUTES_PATHS.SIGNIN ? 'signin' : 'signup'
  )

  if (authStore.error) return

  v$.value.$reset()
  form.value = form
  // closeModal()
  router.go(-1)
}
</script>

<template>
  <!-- <Teleport to="body">
    <AppModal
      :show="showModal"
      @close="showModal = false"
    > -->

  <form
    class="form"
    @submit.prevent="submitForm"
  >
    <!-- <div v-if="authStore.loader">Loading...</div>
    <div v-else>{{ authStore.error }}</div> -->
    <!-- <div v-if="authStore.error">{{ authStore.error }}</div> -->

    <!-- <h2 class="form-title">Create an account</h2> -->
    <h2 class="form-title">{{ title }}</h2>

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
      :label="lableBtn"
      class="form-btn"
    />

    <span
      v-if="$route.path === ROUTES_PATHS.SIGNIN"
      class="form-link"
    >
      Don't you have an account?
      <RouterLink
        class="form-link-to"
        :to="ROUTES_PATHS.SIGNUP"
      >
        Sign up
      </RouterLink>
    </span>

    <span
      v-else
      class="form-link"
    >
      Already have an account?
      <RouterLink
        class="form-link-to"
        :to="ROUTES_PATHS.SIGNIN"
      >
        Sign in
      </RouterLink>
    </span>
  </form>

  <!-- </AppModal>
  </Teleport> -->
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.form
  padding: 20px
  width: 350px
  background: $background
  border: 1px solid $border
  border-radius: 7px

  @media screen and (max-width: 767px)
    width: 310px
    border: none

.form-title
  margin-bottom: 20px
  color: $accent
  font-size: 20px
  font-weight: 700
  text-align: center

  @media screen and (min-height: 431px)
    margin-bottom: 50px

.form-btn
  margin: 5px 0
  width: 100%

  @media screen and (min-height: 431px)
    margin: 20px 0

.form-link
  font-size: 13px

.form-link-to
  font-size: 14px
  font-weight: 700

.form-link-to:hover
  color: $accent
</style>
