<script setup>
import TiresList from '@/components/TiresList.vue'
import { useTiresStore } from '@/stores/tires'

const tiresStore = useTiresStore()

if (tiresStore.tires.length === 0) tiresStore.getAllTires()
</script>

<template>
  <div class="tires">
    <TiresList :tires="tiresStore.tires" />
  </div>
</template>

<style lang="sass" scoped>

.tires
  padding: 20px
  min-height: 100%
</style>
