<script setup>
import { useTiresStore } from '@/stores/tires'
import TiresList from '@/components/TiresList.vue'

const tiresStore = useTiresStore()
</script>

<template>
  <div class="favorites">
    <TiresList :tires="tiresStore.favorites" />
  </div>
</template>

<style lang="sass" scoped>
.favorites
  padding: 20px
  min-height: 100%
</style>
