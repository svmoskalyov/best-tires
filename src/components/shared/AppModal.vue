<script setup>
import { onMounted, onUnmounted } from 'vue'
import AppButton from './AppButton.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  show: Boolean
})

const router = useRouter()
const emit = defineEmits(['close'])

function closeModal() {
  emit('close')
  // router.go(-1)
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
        <slot />
        <AppButton
          class="modal-btn"
          icon
          @click="closeModal"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </AppButton>
      </div>
    </div>
  </Transition>
</template>

<style lang="sass">
@import '../../assets/styles/main'

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
  position: relative
  width: 350px
  margin: auto
  padding: 40px
  background-color: $background
  border-radius: 7px
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
  transition: all 0.3s ease
  border: 1px solid $border

.modal-btn
  position: absolute
  top: 4px
  right: 4px

.modal-enter-from
  opacity: 0

.modal-leave-to
  opacity: 0

.modal-enter-from .modal-container,
.modal-leave-to .modal-container
  -webkit-transform: scale(1.1)
  transform: scale(1.1)
</style>
