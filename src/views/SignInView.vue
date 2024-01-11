<script setup>
import FormAuth from '@/components/FormAuth.vue'
</script>

<template>
  <div class="signup-page">
    <FormAuth
      title="Welcome back"
      lable-btn="Sign in"
    />
  </div>
</template>

<style lang="sass" scoped>
.signup-page
  display: flex
  justify-content: center
  align-items: center
  height: 100%
</style>
