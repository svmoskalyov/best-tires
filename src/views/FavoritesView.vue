<script setup>
import { ref } from 'vue'
import { useTiresStore } from '@/stores/tires'
import TiresList from '@/components/TiresList.vue'

const showLoader = ref(false)
const tiresStore = useTiresStore()
</script>

<template>
  <div class="favorites">
    <span v-if="showLoader">loading...</span>

    <TiresList :tires="tiresStore.favorites" />
  </div>
</template>

<style lang="sass" scoped>
.favorites
  padding: 20px
  min-height: 100%
</style>
