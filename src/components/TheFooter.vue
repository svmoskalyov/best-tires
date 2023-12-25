<script setup>
import Container from '@/components/shared/AppContainer.vue'
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="footer__content">
        <div class="footer__copyright">&copy; 2024 [name]</div>
        <div class="footer__link">in</div>
      </div>
    </Container>
  </footer>
</template>

<style lang="sass" scoped>

.footer
  grid-area: footer
  outline: 1px solid tomato

  &__content
    display: flex
    justify-content: space-between
    align-items: center
    height: 40px
</style>
