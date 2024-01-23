<script setup>
import { useTiresStore } from '@/stores/tires'

const tiresStore = useTiresStore()
const tiresCart = tiresStore.cart
</script>

<template>
  <div class="cart">
    <ul
      v-if="tiresCart.length > 0"
      class="cart-list"
    >
      <TransitionGroup name="list">
        <li
          v-for="tire of tiresCart"
          :key="tire.id"
        >
          <p>button delete</p>
          <p>img</p>
          <p>count</p>
          <p>plus - minus count</p>
          <p>price</p>
          <p>summ</p>
        </li>
      </TransitionGroup>
    </ul>
    <h2 v-else>Tires list is empty</h2>
  </div>
</template>

<style lang="sass" scoped>
.cart
  padding: 20px
  min-height: 100%

// .cart-list
//   display: grid
//   justify-items: center
//   grid-template-rows: repeat(auto-fill, minmax(474px, 1fr))
//   gap: 20px

.list-move, .list-enter-active, .list-leave-active
  transition: all 0.5s ease

.list-enter-from, .list-leave-to
  opacity: 0
  transform: translateX(30px)

.list-leave-active
  position: absolute
</style>
