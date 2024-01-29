<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTES_PATHS } from '@/constants/router'
import { useAuthStore } from '@/stores/auth'
import { useFavoritesStore } from '@/stores/favorites'
import { useCartStore } from '@/stores/cart'

import AppButton from './shared/AppButton.vue'
import AppModal from './shared/AppModal.vue'
import FormAuth from './FormAuth.vue'

const router = useRouter()
const authStore = useAuthStore()
const favoritesStore = useFavoritesStore()
const cartStore = useCartStore()
const showModal = ref(false)
const auth = false

const token = computed(() => authStore.userInfo.token)

function signOut() {
  authStore.signout()
  router.push(ROUTES_PATHS.SIGNIN)
}
</script>

<template>
  <div class="person">
    <div class="favorites">
      <AppButton
        icon
        :disabled="favoritesStore.countFavorites === 0"
        @click="$router.push(ROUTES_PATHS.FAVORITES)"
      >
        <font-awesome-icon
          :icon="['fas', 'heart']"
          :class="{ 'favorites-icon': favoritesStore.countFavorites > 0 }"
        />
      </AppButton>

      <span
        :class="[
          'count',
          'favorites-count',
          { 'count-disabled': favoritesStore.countFavorites === 0 }
        ]"
      >
        {{ favoritesStore.countFavorites }}
      </span>
    </div>

    <div class="cart">
      <AppButton
        icon
        :disabled="cartStore.totalTiresInCart === 0"
        @click="$router.push(ROUTES_PATHS.CART)"
      >
        <font-awesome-icon
          :icon="['fas', 'cart-shopping']"
          :class="{ 'cart-icon': cartStore.totalTiresInCart > 0 }"
        />
      </AppButton>

      <span
        :class="[
          'count',
          'cart-count',
          { 'count-disabled': cartStore.totalTiresInCart === 0 }
        ]"
      >
        {{ cartStore.totalTiresInCart }}
      </span>
    </div>

    <div class="auth-actions">
      <!-- <AppButton
        v-if="!auth"
        icon
        @click="showModal = true"
      > -->

      <AppButton
        v-if="!token"
        icon
        @click="$router.push(ROUTES_PATHS.SIGNIN)"
      >
        <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" />
      </AppButton>
      <AppButton
        v-else
        icon
        @click="signOut"
      >
        <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" />
      </AppButton>
    </div>
  </div>

  <!-- <Teleport to="body">
    <AppModal
      :show="showModal"
      @close="showModal = false"
    > -->

  <!-- <FormAuth
        title="Create an account"
        lable-btn="Sign up"
        @submit="showModal = false"
      /> -->

  <!-- </AppModal>
  </Teleport> -->
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.person
  display: flex
  gap: 12px

.favorites
  position: relative

.favorites-icon
  color: $heart

.cart
  position: relative

.cart-icon
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

.count-disabled
  opacity: .6
</style>
