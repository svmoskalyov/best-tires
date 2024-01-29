<script setup>
import { useFavoritesStore } from '@/stores/favorites'
import TiresList from '@/components/TiresList.vue'

const favoritesStore = useFavoritesStore()
</script>

<template>
  <div class="favorites">
    <TiresList :tires="favoritesStore.favorites" />
  </div>
</template>

<style lang="sass" scoped>
.favorites
  padding: 20px
  min-height: 100%
</style>
