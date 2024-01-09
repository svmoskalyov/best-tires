<script setup>
import { ROUTES_PATHS } from '@/constants/router'
</script>

<template>
  <nav class="nav">
    <RouterLink
      class="nav-link"
      :to="ROUTES_PATHS.HOME"
      >Home</RouterLink
    >
    <RouterLink
      class="nav-link"
      :to="ROUTES_PATHS.TIRES"
      >Tires</RouterLink
    >
  </nav>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.nav-link
  padding: 22px 6px

.nav-link:hover
  color: $accent

.router-link-active
  color: $accent
</style>
