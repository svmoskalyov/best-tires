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
    <svg class="home-svg">
      <text
        class="home-svg-text"
        x="50%"
        y="50%"
        dy=".35em"
        text-anchor="middle"
      >
        The best tires
      </text>
    </svg>

    <AppButton
      class="home-btn"
      label="Choose Tires"
      @click="goTires"
    />
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.home
  display: flex
  flex-direction: column
  align-items: center
  gap: 40px
  min-height: 100%
  background-image: url('img/bg.jpg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
  box-shadow: 0px 0px 20px 20px rgba(0,0,0,1) inset

.home-svg
  width: 100%
  height: 100%

  @media screen and (min-height: 431px) and (orientation: landscape)
    margin-top: 60px

.home-svg-text
  animation: stroke 5s infinite alternate
  stroke-width: 2
  stroke: $accent
  font-size: 40px
  font-weight: 700

  @media screen and (min-width: 768px)
    font-size: 100px

.home-btn
  width: 240px

@keyframes stroke
  0%
    fill: rgba(72,138,204,0)
    stroke: rgba(255,102,45,1)
    stroke-dashoffset: 25%
    stroke-dasharray: 0 50%
    stroke-width: 2

  70%
    fill: rgba(72,138,204,0)
    stroke: rgba(255,102,45,1)
  80%
    fill: rgba(72,138,204,0)
    stroke: rgba(255,102,45,1)
    stroke-width: 3
  100%
    fill: rgba(255,102,45,1)
    stroke: rgba(255,102,45,0)
    stroke-dashoffset: -25%
    stroke-dasharray: 50% 0
    stroke-width: 0
</style>
