<script setup>
import Container from '@/components/shared/AppContainer.vue'
import AppButton from './shared/AppButton.vue'
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="footer__content">
        <div class="footer__copyright">&copy; 2024 Serhii Moskalov</div>
        <div class="footer__link">
          <a
            href="https://www.linkedin.com/in/serhii-moskalov"
            target="_blank"
          >
            <AppButton icon>
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </AppButton>
          </a>
        </div>
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
    height: 48px
</style>
