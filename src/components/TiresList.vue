<script setup>
import TiresListItem from './TiresListItem.vue'
import { useTiresStore } from '@/stores/tires'

const props = defineProps({
  tires: {
    type: Array,
    required: true,
    default: () => []
  }
})

const tiresStore = useTiresStore()
</script>

<template>
  <div
    v-if="tires.length > 0"
    class="tires-list"
  >
    <TransitionGroup name="list">
      <TiresListItem
        v-for="tire of tires"
        :key="tire.id"
        :tire="tire"
      />
    </TransitionGroup>
  </div>

  <div
    v-else-if="tiresStore.loader"
    class="spinner"
  >
    <font-awesome-icon
      :icon="['fas', 'spinner']"
      spin-pulse
      size="5x"
    />
  </div>
  <h2
    v-else
    class="empty"
  >
    Tires list is empty
  </h2>
</template>

<style lang="sass" scoped>
.spinner, .empty
  text-align: center

.tires-list
  display: grid
  justify-items: center
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr))
  gap: 20px

.list-move, .list-enter-active, .list-leave-active
  transition: all 0.5s ease

.list-enter-from, .list-leave-to
  opacity: 0
  transform: translateX(30px)

.list-leave-active
  position: absolute
</style>
