<script setup>
import TiresListItem from './TiresListItem.vue'

const props = defineProps({
  tires: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <div class="tires-list">
    <TiresListItem
      v-for="tire of tires"
      :key="tire.id"
      :tire="tire"
    />
  </div>
</template>

<style lang="sass" scoped>
// .tires-list
</style>
