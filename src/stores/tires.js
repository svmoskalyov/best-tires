import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import axiosApiInstance from '@/services/axios'
import firebase from '@/services/firebase'

export const useTiresStore = defineStore('tiresStore', () => {
  const tires = ref([])
  const loader = ref(false)

  const countTires = computed(() => tires.value.length)

  const tiresInLocalStorage = localStorage.getItem('tires')
  if (tiresInLocalStorage) {
    tires.value = JSON.parse(tiresInLocalStorage)
  }

  const getAllTires = async () => {
    loader.value = true

    try {
      const response = await axiosApiInstance.get(
        `${firebase.databaseURL}/tires.json`
      )
      tires.value = response.data
    } catch (err) {
      console.log(err.response)
    } finally {
      loader.value = false
    }
  }

  function getTireById(id) {
    return tires.value.find(el => el.id === id)
  }

  watch(
    tires,
    state => {
      localStorage.setItem('tires', JSON.stringify(state))
    },
    { deep: true }
  )

  return {
    loader,
    tires,
    countTires,
    getAllTires,
    getTireById
  }
})
