<script setup>
import AppButton from './shared/AppButton.vue'

const favoritesCount = false
const cartCount = false
const auth = false
</script>

<template>
  <div class="person">
    <div class="favorites">
      <AppButton
        icon
        :disabled="!favoritesCount"
      >
        <font-awesome-icon
          :icon="['fas', 'heart']"
          :class="[{ favorites__icon: favoritesCount }]"
        />
      </AppButton>

      <span
        :class="[
          'count',
          'favorites__count',
          { count_disabled: !favoritesCount }
        ]"
      >
        0
      </span>
    </div>

    <div class="cart">
      <AppButton
        icon
        :disabled="!cartCount"
      >
        <font-awesome-icon
          :icon="['fas', 'cart-shopping']"
          :class="[{ cart__icon: cartCount }]"
        />
      </AppButton>

      <span :class="['count', 'cart__count', { count_disabled: !cartCount }]">
        0
      </span>
    </div>

    <div class="auth-actions">
      <AppButton
        v-if="!auth"
        icon
      >
        <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" />
      </AppButton>
      <AppButton
        v-else
        icon
      >
        <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
      </AppButton>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.favorites
  position: relative

  &__icon
    color: $heart

.cart
  position: relative

  &__icon
    color: $cart

.count
  position: absolute
  top: -4px
  right: 0
  display: flex
  align-items: center
  justify-content: center
  width: 16px
  height: 16px
  font-size: 14px
  line-height: 1
  border-radius: 50%
  cursor: default

  &_disabled
    opacity: .6
</style>