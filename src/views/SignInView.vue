<script setup>
import FormAuth from '@/components/FormAuth.vue'
</script>

<template>
  <div class="signup">
    <FormAuth
      title="Welcome back"
      lable-btn="Sign in"
    />
  </div>
</template>

<style lang="sass" scoped>
.signup
  display: flex
  justify-content: center
  align-items: center
  height: 100%
</style>
