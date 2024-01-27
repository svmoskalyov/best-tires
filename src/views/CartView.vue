<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTES_PATHS } from '@/constants/router'
import { useTiresStore } from '@/stores/tires'
import { useAuthStore } from '@/stores/auth'
import AppButton from '@/components/shared/AppButton.vue'

const router = useRouter()
const authStore = useAuthStore()
const tiresStore = useTiresStore()

const token = computed(() => authStore.userInfo.token)

function tiresBuy() {
  if (token.value) {
    tiresStore.sendTires()
    router.push(ROUTES_PATHS.TIRES)
  } else {
    router.push(ROUTES_PATHS.SIGNIN)
  }
}
</script>

<template>
  <div
    v-if="tiresStore.cart.length > 0"
    class="cart"
  >
    <ul class="cart-list">
      <TransitionGroup name="list">
        <li
          v-for="tire of tiresStore.cart"
          :key="tire.id"
          class="cart-item"
        >
          <AppButton
            icon
            @click="tiresStore.tireDelCart(tire.id)"
          >
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
                  <AppButton
                    icon
                    @click="tiresStore.tireMinusCount(tire.id)"
                  >
                    <font-awesome-icon :icon="['fas', 'minus']" />
                  </AppButton>
                  <span class="card-count">{{ tire.count }}</span>
                  <AppButton
                    icon
                    @click="tiresStore.tirePlusCount(tire.id)"
                  >
                    <font-awesome-icon :icon="['fas', 'plus']" />
                  </AppButton>
                </div>
                <span class="card-sum">
                  {{ tire.price * tire.count }} &#8372;
                </span>
              </div>
            </div>
          </div>
        </li>
      </TransitionGroup>
    </ul>

    <div class="cart-pay-wrapper">
      <p class="cart-pay">
        <span class="cart-pay-name">Total pay: </span>
        <span class="cart-pay-value">
          {{ tiresStore.totalPayInCart }} &#8372;
        </span>
      </p>
      <AppButton
        label="Placing an order"
        @click="tiresBuy()"
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

.cart-list
  display: grid
  justify-items: center
  gap: 20px
  margin-bottom: 30px

.cart-item
  display: flex
  align-items: center
  padding: 10px
  border: 1px solid $border
  border-radius: 7px

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
  justify-content: center
  gap: 10px

  @media screen and (max-width: 447px)
    flex-wrap: wrap
    justify-content: space-around
.card-price
  width: 80px
  text-align: right

.card-count-wrapper
  display: flex
  align-items: center
  gap: 10px
  width: 124px

.card-count
  width: 24px
  text-align: center

.card-sum
  width: 80px

  @media screen and (max-width: 447px)
    text-align: right

.cart-pay-wrapper
  display: flex
  flex-direction: column
  align-items: flex-end
  gap: 60px
  margin: auto
  max-width: 620px

.cart-pay
  width: 210px
  margin-right: 60px
  font-size: 18px

  @media screen and (max-width: 447px)
    margin-right: 0

.cart-pay-name
  padding-right: 8px
  font-weight: 700

.list-move, .list-enter-active, .list-leave-active
  transition: all 0.5s ease

.list-enter-from, .list-leave-to
  opacity: 0
  transform: translateX(30px)

.list-leave-active
  position: absolute
</style>
