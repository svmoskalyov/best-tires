<script setup>
// import { computed } from 'vue'
// import { useAuthStore } from '@/stores/auth'
import { ROUTES_PATHS } from '@/constants/router'

// const authStore = useAuthStore()
// const token = computed(() => authStore.userInfo.token)
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
    <RouterLink
      class="nav-link"
      :to="ROUTES_PATHS.ABOUT"
      >About</RouterLink
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
