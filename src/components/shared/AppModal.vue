<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  show: Boolean
})

const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
}

function keydownListener(event) {
  if (event.key === 'Escape') closeModal()
}

onMounted(() => {
  document.addEventListener('keydown', keydownListener)
})

onUnmounted(() => {
  document.removeEventListener('keydown', keydownListener)
})
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="modal-mask"
      @click.self="closeModal"
    >
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">title default</slot>
        </div>

        <div class="modal-body">
          <slot name="body">body default</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer"> footer default </slot>
        </div>

        <button
          class="modal-default-button"
          @click.prevent="closeModal"
        >
          Close
        </button>
      </div>
    </div>
  </Transition>
</template>

<style lang="sass">
.modal-mask
    position: fixed
    z-index: 9998
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.5)
    display: flex
    transition: opacity 0.3s ease

.modal-container
    width: 300px
    margin: auto
    padding: 20px 30px
    background-color: #fff
    border-radius: 2px
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
    transition: all 0.3s ease

.modal-header
    margin-top: 0
    color: #42b983
    font-weight: 700

.modal-body
    margin: 20px 0

.modal-default-button
    float: right

.modal-enter-from
    opacity: 0

.modal-leave-to
    opacity: 0

.modal-enter-from .modal-container,
.modal-leave-to .modal-container
    -webkit-transform: scale(1.1)
    transform: scale(1.1)
</style>
