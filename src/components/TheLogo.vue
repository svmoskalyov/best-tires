<script setup>
import { ROUTES_PATHS } from '@/constants/router'
</script>

<template>
  <RouterLink
    class="logo"
    :to="ROUTES_PATHS.HOME"
  >
    <img
      class="logo-img"
      src="/favicon.ico"
      alt="logo"
    />
    <span class="logo-text">Best Tires</span>
  </RouterLink>
</template>

<style lang="sass" scoped>

.logo
  display: flex
  align-items: flex-end

.logo-img
  width: 30px
  height: 30px

.logo-text
  font-size: 12px
  line-height: 1
  padding-left: 4px
  width: 40px
</style>
