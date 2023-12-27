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
</script>

<template>
  <button
    :class="['btn', { btn__icon: icon }]"
    :disabled="disabled"
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
    border: 2px solid $text
    border-radius: 12px
    transition: .2s

    &:enabled:hover
        background: $accent

    &:disabled
        opacity: .6

    &__icon
        padding: 0
        width: 40px
        height: 40px
        border: none
        border-radius: 50%
</style>
