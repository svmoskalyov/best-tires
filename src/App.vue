<script setup>
import { RouterView } from 'vue-router'
import Header from './components/TheHeader.vue'
import Footer from './components/TheFooter.vue'
import Container from './components/shared/AppContainer.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const checkUser = () => {
  const tokens = JSON.parse(localStorage.getItem('userTokens'))
  if (tokens) {
    authStore.userInfo.token = tokens.token
    authStore.userInfo.refreshToken = tokens.refreshToken
  }
}

checkUser()
</script>

<template>
  <div class="app">
    <notifications />
    <Header />
    <main>
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
</style>
