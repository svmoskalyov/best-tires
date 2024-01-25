<script setup>
import AppButton from '@/components/shared/AppButton.vue'
import { useTiresStore } from '@/stores/tires'

const tiresStore = useTiresStore()
const tiresCart = tiresStore.cart
</script>

<template>
  <div
    v-if="tiresCart.length > 0"
    class="cart"
  >
    <ul class="cart-list">
      <TransitionGroup name="list">
        <li
          v-for="tire of tiresCart"
          :key="tire.id"
          class="cart-item"
        >
          <AppButton icon>
            <font-awesome-icon :icon="['fas', 'xmark']" />
          </AppButton>

          <div class="img-wrapper">
            <img
              v-if="tire.picture"
              class="card-img"
              loading="lazy"
              width="100"
              height="100"
              alt="image tire"
              :src="tire.picture"
            />
            <font-awesome-icon
              v-else
              class="card-img card-img-def"
              :icon="['fas', 'image']"
            />
          </div>

          <div class="card-info">
            <h2 class="card-name">
              {{
                tire.brand.toUpperCase() +
                ' ' +
                tire.width +
                '/' +
                tire.profile +
                ' ' +
                tire.diameter
              }}
            </h2>

            <div class="card-price-wrapper">
              <span class="card-price">{{ tire.price }} &#8372;</span>
              <div class="card-count-wrapper">
                <AppButton icon></AppButton>
                <span class="card-count">count</span>
                <AppButton icon></AppButton>
              </div>
              <span class="card-sum">sum</span>
            </div>
          </div>
        </li>
      </TransitionGroup>
    </ul>

    <div class="cart-pay-wrapper">
      <span class="cart-pay">To pay:</span>
      <AppButton
        class="cart-btn"
        label="Placing an order"
      />
    </div>
  </div>
  <h2 v-else>Tires list is empty</h2>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.cart
  padding: 20px
  min-height: 100%
  outline: 1px solid green

.cart-list
  // display: flex
  // flex-direction: column
  // align-items: center
  display: grid
  justify-items: center
  gap: 20px
  outline: 1px dotted tomato

.cart-item
  width: 500px
  outline: 1px dotted green

.img-wrapper
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 20px
  width: 100px
  height: 100px

.card-img
  width: 100%
  height: 100%
  border-top-left-radius: 7px
  border-top-right-radius: 7px
  background: $background
  transition: all 0.2s ease

.card-img-def
  width: 30%
  height: 30%


.card-info
  margin-bottom: 20px

.card-name
  font-size: 18px
  font-weight: 700

.card-price-wrapper
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 10px

// .card-count-wrapper
// .card-count
// .card-sum
// .cart-pay-wrapper
// .cart-pay
// .cart-btn



.list-move, .list-enter-active, .list-leave-active
  transition: all 0.5s ease

.list-enter-from, .list-leave-to
  opacity: 0
  transform: translateX(30px)

.list-leave-active
  position: absolute
</style>
