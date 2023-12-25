<script setup>
import { RouterView } from 'vue-router'
import Header from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'
import Container from './components/shared/AppContainer.vue'
</script>

<template>
  <div class="app">
    <Header />
    <main class="main">
      <Container>
        <RouterView />
      </Container>
    </main>
    <Footer />
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
