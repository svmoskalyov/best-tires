<script setup>
import TiresList from '@/components/TiresList.vue'
import { useTiresStore } from '@/stores/tires'

const tiresStore = useTiresStore()
</script>

<template>
  <div class="favorites">
    <h2>favorites view</h2>
    <span v-if="showLoader">loading...</span>

    <TiresList :tires="tiresStore.favorites" />
  </div>
</template>

<style lang="sass" scoped>
.favorites
  padding: 20px
  min-height: 100%
</style>
