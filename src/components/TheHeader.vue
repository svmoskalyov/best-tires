<script setup>
import Logo from './TheLogo.vue'
import NavBar from './TheNavBar.vue'
import ThePerson from './ThePerson.vue'
import Container from './shared/AppContainer.vue'
</script>

<template>
  <header class="header">
    <Container>
      <div class="header-content">
        <Logo />
        <NavBar />
        <ThePerson />
      </div>
    </Container>
  </header>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.header
  position: sticky
  z-index: 1100
  top: 0
  left: 0
  grid-area: header

.header-content
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 20px
  height: 60px
  background: $background

  @media screen and (max-width: 767px) and (orientation: portrait)
    flex-wrap: wrap
    justify-content: space-around
    gap: 10px
    padding-top: 20px
    height: 100px
</style>
