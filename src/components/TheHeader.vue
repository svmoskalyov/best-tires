<script setup>
import AppContainer from './shared/AppContainer.vue'
</script>

<template>
  <header class="header">
    <AppContainer>
      <div class="header__content">
        <div class="header__logo">Logo</div>
        <div class="header__nav">Navigation</div>
        <div class="header__profile">
          <div class="header__favorites-count">FavoritesCount</div>
          <div class="header__cart">Cart</div>
          <div class="header__user">User</div>
        </div>
      </div>
    </AppContainer>
  </header>
</template>

<style lang="sass" scoped>
.header
  grid-area: header
  outline: 1px solid green

  &__content
    display: flex
    justify-content: space-between
    align-items: center
    height: 60px

  &__profile
    display: flex
    gap: 12px
</style>
