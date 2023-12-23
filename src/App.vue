<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import AppContainer from './components/shared/AppContainer.vue'
</script>

<template>
  <div class="app">
    <TheHeader />
    <main class="main">
      <AppContainer>
        <RouterView />
      </AppContainer>
    </main>
    <TheFooter />
  </div>
</template>

<style lang="sass" scoped>
.app
  display: grid
  grid: "header" auto "main" 1fr "footer" auto
  min-height: 100vh
  background-image: url('img/bg.jpg')
  background-repeat: no-repeat
  background-size: cover
  background-position: center
</style>
