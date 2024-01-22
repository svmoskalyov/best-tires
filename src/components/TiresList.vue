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
  <h2 v-else>Tires list is empty</h2>
</template>

<style lang="sass" scoped>
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
