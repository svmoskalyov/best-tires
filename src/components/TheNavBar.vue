<script setup>
import { ROUTES_PATHS } from '@/constants/router'
</script>

<template>
  <nav class="nav">
    <RouterLink
      class="nav__link"
      :to="ROUTES_PATHS.HOME"
      >Home</RouterLink
    >
    <RouterLink
      class="nav__link"
      :to="ROUTES_PATHS.TIRES"
      >Tires</RouterLink
    >
  </nav>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.nav__link
        padding: 22px 6px

.router-link-active
    color: $accent
</style>
