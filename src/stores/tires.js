import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import axiosApiInstance from '@/services/axios'
import firebase from '@/services/firebase'

export const useTiresStore = defineStore('tiresStore', () => {
  const error = ref('')
  const loader = ref(false)
  const tires = ref([])
  const favorites = ref([])
  const cart = ref([])
  const totalTiresInCart = ref(0)
  const totalPayInCart = ref(0)

  const countTires = computed(() => tires.value.length)
  const countFavorites = computed(() => favorites.value.length)

  const tiresInLocalStorage = localStorage.getItem('tires')
  if (tiresInLocalStorage) {
    tires.value = JSON.parse(tiresInLocalStorage)
  }

  const tiresFavInLocalStorage = localStorage.getItem('tiresFav')
  if (tiresFavInLocalStorage) {
    favorites.value = JSON.parse(tiresFavInLocalStorage)
  }

  const tiresCartInLocalStorage = localStorage.getItem('tiresCart')
  if (tiresCartInLocalStorage) {
    cart.value = JSON.parse(tiresCartInLocalStorage)
    if (cart.value.length > 0) {
      sumTiresInCart()
    }
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

  function sendTires() {
    const tiresPay = []
    cart.value.map(el => {
      tiresPay.push({ id: el.id, count: el.count })
    })
    console.log(tiresPay)
    cart.value = []
    sumTiresInCart()
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

  function tireAddCart(obj) {
    const idx = tires.value.findIndex(el => el.id === obj.id)
    tires.value[idx].count = 1
    totalTiresInCart.value += 1
    cart.value.push(obj)
    sumTiresInCart()
  }

  function tirePlusCount(id) {
    const idx = cart.value.findIndex(el => el.id === id)
    cart.value[idx].count++
    sumTiresInCart()
  }

  function tireMinusCount(id) {
    const idx = cart.value.findIndex(el => el.id === id)
    if (cart.value[idx].count > 1) cart.value[idx].count--
    sumTiresInCart()
  }

  function getTireInCartById(id) {
    return cart.value.find(el => el.id === id)
  }

  function tireDelCart(id) {
    cart.value = cart.value.filter(el => el.id !== id)
    sumTiresInCart()
  }

  function sumTiresInCart() {
    totalTiresInCart.value = cart.value.reduce(
      (accum, item) => accum + item.count,
      0
    )
    totalPayTiresInCart()
  }

  function totalPayTiresInCart() {
    totalPayInCart.value = cart.value.reduce(
      (accum, item) => accum + item.count * item.price,
      0
    )
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

  watch(
    cart,
    state => {
      localStorage.setItem('tiresCart', JSON.stringify(state))
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
    totalTiresInCart,
    totalPayInCart,
    getAllTires,
    getTireById,
    sendTires,
    getTireInCartById,
    toggleFavorites,
    tireAddCart,
    tirePlusCount,
    tireMinusCount,
    tireDelCart
  }
})

// ref()s become state properties
// computed()s become getters
// function()s become actions
