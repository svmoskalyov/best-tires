<script setup>
import { ref, onMounted } from 'vue'
import axiosApiInstance from '@/services/axios'
import TiresList from '@/components/TiresList.vue'
import { useTiresStore } from '@/stores/tires'
import firebase from '@/services/firebase'

const showLoader = ref(false)
const tiresStore = useTiresStore()

const getAllTires = async () => {
  showLoader.value = true
  try {
    const response = await axiosApiInstance.get(
      `${firebase.databaseURL}/tires.json`
    )
    console.log(response)
    console.log(response.data)
    // tires.value = response.data
  } catch (err) {
    console.log(err.response)
  } finally {
    showLoader.value = false
  }
}

onMounted(async () => {
  // await getAllTires()
})
</script>

<template>
  <div class="tires">
    <h2>This is an tires page</h2>
    <span v-if="showLoader">loading...</span>

    <TiresList :tires="tiresStore.tires" />
  </div>
</template>

<style lang="sass" scoped>

.tires
  min-height: 100%
  outline: 1px solid blue
</style>
