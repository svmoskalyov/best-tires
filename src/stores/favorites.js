import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'
import { useTiresStore } from '@/stores/tires'

export const useFavoritesStore = defineStore('favoritesStore', () => {
  const favorites = ref([])

  const countFavorites = computed(() => favorites.value.length)

  const tiresFavInLocalStorage = localStorage.getItem('tiresFavorites')
  if (tiresFavInLocalStorage) {
    favorites.value = JSON.parse(tiresFavInLocalStorage)
  }

  function toggleFavorites(obj) {
    const tiresStore = useTiresStore()
    const idx = tiresStore.tires.findIndex(el => el.id === obj.id)
    tiresStore.tires[idx].isFav = !tiresStore.tires[idx].isFav

    if (tiresStore.tires[idx].isFav) {
      favorites.value.push(obj)
    } else {
      favorites.value = favorites.value.filter(el => el.id !== obj.id)
    }
  }

  watch(
    favorites,
    state => {
      localStorage.setItem('tiresFavorites', JSON.stringify(state))
    },
    { deep: true }
  )

  return { favorites, countFavorites, toggleFavorites }
})
