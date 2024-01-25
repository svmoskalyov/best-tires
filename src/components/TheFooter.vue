<script setup>
import Container from '@/components/shared/AppContainer.vue'
import AppButton from './shared/AppButton.vue'
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="footer-content">
        <div class="footer-copyright">
          <span> &copy; 2024 Serhii Moskalov </span>
        </div>
        <div class="footer-link">
          <a
            href="https://www.linkedin.com/in/serhii-moskalov"
            target="blank"
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
@import '../assets/styles/main'

.footer
  grid-area: footer
  padding: 0 20px

.footer-content
  display: flex
  justify-content: space-between
  align-items: center
  height: 48px
  background: $background

  @media screen and (max-width: 767px)
    padding: 0
</style>
