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

          <div class="cart-card">
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
                  <AppButton icon>
                    <font-awesome-icon :icon="['fas', 'minus']" />
                  </AppButton>
                  <span class="card-count">1</span>
                  <AppButton icon>
                    <font-awesome-icon :icon="['fas', 'plus']" />
                  </AppButton>
                </div>
                <span class="card-sum">xxxxx &#8372;</span>
              </div>
            </div>
          </div>
        </li>
      </TransitionGroup>
    </ul>

    <div class="cart-pay-wrapper">
      <p class="cart-pay">
        <span class="cart-pay-name">Total pay: </span>
        <span> 12345 &#8372; </span>
      </p>
      <AppButton label="Placing an order" />
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
  // outline: 1px dotted tomato

.cart-item
  display: flex
  align-items: center
  padding: 10px
  border: 1px solid $border
  border-radius: 7px
  // outline: 1px dotted green

.cart-card
  display: flex

  @media screen and (max-width: 767px)
    flex-wrap: wrap
    justify-content: center
    gap: 12px

.img-wrapper
  width: 100px
  height: 100px

.card-img
  width: 100%
  height: 100%
  background: $background

.card-img-def
  width: 30%
  height: 30%

.card-info
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  gap: 8px
  padding: 4px 20px

.card-name
  font-size: 18px
  font-weight: 700

.card-price-wrapper
  display: flex
  align-items: center
  gap: 14px

  @media screen and (max-width: 390px)
    flex-wrap: wrap
    justify-content: space-around

.card-count-wrapper
  display: flex
  align-items: center
  gap: 10px

// .card-count
// .card-sum

.cart-pay-wrapper
  display: flex
  flex-direction: column
  align-items: flex-end
  gap: 60px
  padding: 30px
  margin: auto
  max-width: 620px

.cart-pay
  padding-right: 60px
  font-size: 18px

.cart-pay-name
  font-weight: 700

.list-move, .list-enter-active, .list-leave-active
  transition: all 0.5s ease

.list-enter-from, .list-leave-to
  opacity: 0
  transform: translateX(30px)

.list-leave-active
  position: absolute
</style>
