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
    <!-- <h1 class="home-title">The best tires</h1> -->
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
    <div class="home-wrapper">
      <span class="home-text">choose from us</span>
      <AppButton
        class="home-btn"
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

// .home-title
//   margin-top: 60px
//   font-size: 74px
//   font-weight: 700
//   color: $accent

.home-wrapper
  display: flex
  flex-wrap: wrap
  align-items: center
  gap: 20px

.home-text
  font-size: 44px
  line-height: 1.8

.home-btn
  width: 140px

.home-svg
  width: 100%
  height: 100%
  margin-top: 60px

.home-svg-text
  animation: stroke 5s infinite alternate
  stroke-width: 2
  stroke: $accent
  font-size: 100px
  font-weight: 700

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
