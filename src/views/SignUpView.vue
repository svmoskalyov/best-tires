<script setup>
import FormAuth from '@/components/FormAuth.vue'
</script>

<template>
  <div class="signup-page">
    <FormAuth
      title="Create an account"
      lable-btn="Sign up"
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
