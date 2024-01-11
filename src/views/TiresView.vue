<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const tires = ref()
const showLoader = ref(false)

const getAllTires = async () => {
  showLoader.value = true
  try {
    const response = await axios.get(
      `https://best-tires-cbf5f-default-rtdb.europe-west1.firebasedatabase.app/tires.json`
    )
    console.log(response.data)
    // tires.value = response.data
  } catch (err) {
    console.log(err.response)
  } finally {
    showLoader.value = false
  }
}

onMounted(async () => {
  await getAllTires()
})
</script>

<template>
  <div class="tires">
    <h2>This is an tires page</h2>
    <span v-if="showLoader">loading...</span>
    <div>list card tires</div>
  </div>
</template>

<style lang="sass" scoped>

.tires
  min-height: 100%
  outline: 1px solid blue
</style>
