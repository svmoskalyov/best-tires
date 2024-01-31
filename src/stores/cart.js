import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { notify } from '@kyvg/vue3-notification'
import { useTiresStore } from '@/stores/tires'

export const useCartStore = defineStore('cartStore', () => {
  const cart = ref([])
  const totalTiresInCart = ref(0)
  const totalPayInCart = ref(0)

  const tiresCartInLocalStorage = localStorage.getItem('tiresCart')
  if (tiresCartInLocalStorage) {
    cart.value = JSON.parse(tiresCartInLocalStorage)
    if (cart.value.length > 0) {
      sumTiresInCart()
    }
  }

  function sendTires() {
    const tiresPay = []
    cart.value.map(el => {
      tiresPay.push({ id: el.id, count: el.count })
    })

    notify({
      title: 'Cart',
      text: 'Your tires sended',
      type: 'success'
    })

    console.log(tiresPay)
    cart.value = []
    sumTiresInCart()
  }

  function tireAddCart(obj) {
    const tiresStore = useTiresStore()
    const idx = tiresStore.tires.findIndex(el => el.id === obj.id)
    tiresStore.tires[idx].count = 1
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
    cart,
    state => {
      localStorage.setItem('tiresCart', JSON.stringify(state))
    },
    { deep: true }
  )

  return {
    cart,
    totalTiresInCart,
    totalPayInCart,
    sendTires,
    getTireInCartById,
    tireAddCart,
    tirePlusCount,
    tireMinusCount,
    tireDelCart
  }
})
