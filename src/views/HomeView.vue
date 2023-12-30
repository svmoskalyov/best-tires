<script setup>
import { useRouter } from 'vue-router'
import { ROUTES_PATHS } from '@/constants/router'
import AppButton from '@/components/shared/AppButton.vue'

const router = useRouter()

function goTires() {
  router.push(ROUTES_PATHS.TIRES)
}
</script>

<template>
  <div class="home">
    <h1 class="home__title">The best tires</h1>
    <div class="home__wrapper">
      <span class="home__text">choose from us</span>
      <AppButton
        class="home__btn"
        label="Start"
        @click="goTires"
      />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.home
  min-height: 100%
  padding: 20px
  outline: 1px solid blue

  &__title
    margin-top: 60px
    font-size: 74px
    font-weight: 700
    color: $accent

  &__wrapper
    display: flex
    flex-wrap: wrap
    align-items: center
    gap: 20px

  &__text
    font-size: 44px
    line-height: 1.8

  &__btn
    width: 140px
</style>
