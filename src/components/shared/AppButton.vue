<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const clickOnButton = () => {
  emit('click')
}
</script>

<template>
  <button
    :class="['btn', { 'btn-icon': icon }]"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <span v-if="icon"><slot /></span>
    <span v-else>{{ label }}</span>
  </button>
</template>

<style lang="sass" scoped>
@import '../../assets/styles/main'
.btn
  padding: 0 20px
  height: 40px
  font-size: 16px
  background: $background
  border: none
  border: 2px solid $accent
  border-radius: 12px
  transition: .2s
  outline: none

.btn:enabled:hover
  background: $accent

.btn:disabled
  opacity: .6

.btn-icon
  padding: 0
  width: 40px
  height: 40px
  border: none
  border-radius: 50%
  background: transparent
</style>
