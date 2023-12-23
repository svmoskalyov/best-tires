<script setup></script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="sass" scoped>

.container
  // max-width: 1920px
  // max-height: 1080px
  max-width: 1024px
  height: 100%
  margin: 0 auto
  padding: 0 20px
  outline: 1px dotted yellowgreen
</style>
