<script setup>
import Logo from './TheLogo.vue'
import NavBar from './TheNavBar.vue'
import ThePerson from './ThePerson.vue'
import Container from './shared/AppContainer.vue'
</script>

<template>
  <header class="header">
    <Container>
      <div class="header__content">
        <Logo />
        <NavBar />
        <ThePerson />
      </div>
    </Container>
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
</style>
