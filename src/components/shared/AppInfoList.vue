<script setup>
const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <ul class="info-list">
    <li
      v-for="info of list"
      :key="info.name"
      class="info-item"
    >
      <span class="info-name">{{ info.name }}</span>
      <span class="info-dots"></span>
      <span class="info-value">{{ info.value }}</span>
    </li>
  </ul>
</template>

<style lang="sass" scoped>
@import '../../assets/styles/main'
.info-list
  display: flex
  flex-direction: column
  gap: 2px
  margin-bottom: 10px

.info-item
  display: flex
  align-items: flex-end

.info-item .info-dots
  flex-grow: 1
  border-bottom: 1px dotted $text

.info-item .info-value
  flex-basis: 120px
  white-space: nowrap
  overflow: hidden
</style>
