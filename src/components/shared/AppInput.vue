<script setup>
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '300px'
  },
  error: {
    type: Array,
    required: false
  }
})

const emit = defineEmits(['update:value'])

const updateValue = e => {
  emit('update:value', e.target.value)
}
</script>

<template>
  <div
    class="form-input"
    :style="{ width: width }"
  >
    <input
      :id="name"
      class="input-text"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
    />
    <label
      :for="name"
      class="input-label"
    >
      {{ label }}
    </label>
    <TransitionGroup>
      <div
        v-for="element of error"
        :key="element.$uid"
        class="form-error"
      >
        <div class="form-error__message">
          {{ element.$message }}
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="sass" scoped>
@import '../../assets/styles/main'
.form
    &-input
        margin-bottom: 30px
        position: relative

    &-error
        background: $error
        margin-top: 4px
        border-radius: 7px
        font-size: 13px
        color: $text
        padding: 5px

.input
    &-text
        border: 1px solid $accent
        padding: 0 10px
        height: 40px
        border-radius: 7px
        font-size: 15px
        width: 100%
        position: relative
        z-index: 1
        // background: $background
        background: inherit

        &:focus
            & + .input-label
                z-index: 1
                opacity: 1
                top: -20px

        &:not(:placeholder-shown)
            & + .input-label
                z-index: 1
                opacity: 1
                top: -20px

    &-label
        font-weight: bold
        display: block
        position: absolute
        top: 20px
        opacity: 0
        z-index: -1
        transition: .3s
        font-size: 13px
        color: $accent

.v-enter-active,
.v-leave-active
    transition: opacity .5s ease

.v-enter-from,
.v-leave-to
    opacity: 0
</style>
