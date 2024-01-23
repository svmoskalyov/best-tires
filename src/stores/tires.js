import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useTiresStore = defineStore('tiresStore', () => {
  const error = ref('')
  const loader = ref(false)
  const tires = ref([
    {
      id: '6576155d523850ad41fb941b',
      brand: 'fulda',
      type: 'SUV',
      season: 'all-season',
      diameter: 15,
      width: 245,
      profile: 70,
      price: 2363,
      picture:
        'https://res.cloudinary.com/dganwbeyi/image/upload/v1702236930/tires/fuwfs9bildhrck46xwi8.png'
    },
    {
      id: '6576155dbebc2f795a7abe19',
      brand: 'nokian',
      type: 'passenger car',
      season: 'winter',
      diameter: 17,
      width: 205,
      profile: 50,
      price: 5727,
      picture:
        'https://res.cloudinary.com/dganwbeyi/image/upload/v1702236931/tires/golrpb8c1p3mpaxxmasa.png'
    },
    {
      id: '6576155d23d4e3c079d0acbf',
      brand: 'michelin',
      type: 'passenger car',
      season: 'all-season',
      diameter: 16,
      width: 225,
      profile: 40,
      price: 4772,
      picture:
        'https://res.cloudinary.com/dganwbeyi/image/upload/v1702236930/tires/fuwfs9bildhrck46xwi8.png'
    },
    {
      id: '6576155d523850ad41fb941b',
      brand: 'fulda',
      type: 'SUV',
      season: 'all-season',
      diameter: 15,
      width: 245,
      profile: 70,
      price: 2363,
      picture:
        'https://res.cloudinary.com/dganwbeyi/image/upload/v1702236930/tires/fuwfs9bildhrck46xwi8.png'
    },
    {
      id: '6576155dbebc2f795a7abe19',
      brand: 'nokian',
      type: 'passenger car',
      season: 'winter',
      diameter: 17,
      width: 205,
      profile: 50,
      price: 5727,
      picture:
        'https://res.cloudinary.com/dganwbeyi/image/upload/v1702236931/tires/golrpb8c1p3mpaxxmasa.png'
    },
    {
      id: '6576155d23d4e3c079d0acbf',
      brand: 'michelin',
      type: 'passenger car',
      season: 'all-season',
      diameter: 16,
      width: 225,
      profile: 40,
      price: 4772,
      picture:
        'https://res.cloudinary.com/dganwbeyi/image/upload/v1702236930/tires/fuwfs9bildhrck46xwi8.png'
    }
  ])
  const favorites = ref([])
  const cart = ref([])

  const tiresInLocalStorage = localStorage.getItem('tires')
  if (tiresInLocalStorage) {
    tires.value = JSON.parse(tiresInLocalStorage)
  }

  const tiresFavInLocalStorage = localStorage.getItem('tiresFav')
  if (tiresFavInLocalStorage) {
    favorites.value = JSON.parse(tiresFavInLocalStorage)
  }

  const countTires = computed(() => tires.value.length)
  const countFavorites = computed(() => favorites.value.length)

  function getTireById(id) {
    return tires.value.find(el => el.id === id)
  }

  function toggleFavorites(obj) {
    const idx = tires.value.findIndex(el => el.id === obj.id)
    tires.value[idx].isFav = !tires.value[idx].isFav

    if (tires.value[idx].isFav) {
      favorites.value.push(obj)
    } else {
      favorites.value = favorites.value.filter(el => el.id !== obj.id)
    }
  }

  watch(
    tires,
    state => {
      localStorage.setItem('tires', JSON.stringify(state))
    },
    { deep: true }
  )

  watch(
    favorites,
    state => {
      localStorage.setItem('tiresFav', JSON.stringify(state))
    },
    { deep: true }
  )

  return {
    error,
    loader,
    tires,
    favorites,
    cart,
    countTires,
    countFavorites,
    getTireById,
    toggleFavorites
  }
})

// ref()s become state properties
// computed()s become getters
// function()s become actions
