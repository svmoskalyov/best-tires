<script setup>
import { ref } from 'vue'
import AppButton from './shared/AppButton.vue'

const props = defineProps({
  tire: {
    type: Object,
    required: true,
    default: () => {}
  }
})

const favorites = ref(false)
// const hover = ref(false)
const hover = ref(true)
const infoArr = ref([
  {
    name: 'Brand',
    text: props.tire.brand[0].toUpperCase() + props.tire.brand.slice(1)
  },
  { name: 'Type', text: props.tire.type },
  { name: 'Season', text: props.tire.season },
  { name: 'Diameter', text: props.tire.diameter }
])

function tireName() {
  const { brand, width, profile, diameter } = props.tire
  const nameTire =
    brand.toUpperCase() + ' ' + width + '/' + profile + ' ' + diameter
  return nameTire
}

function toogleFavorites() {
  favorites.value = !favorites.value
}
</script>

<template>
  <!-- <div
    class="card"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  > -->

  <div class="card">
    <div class="img-wrapper">
      <img
        v-if="tire.picture"
        class="card-img"
        loading="lazy"
        width="232"
        height="232"
        alt="image tire"
        :src="tire.picture"
      />
      <font-awesome-icon
        v-else
        class="card-img card-img-def"
        :icon="['fas', 'image']"
      />
    </div>

    <div class="card-info">
      <h2 class="card-name">{{ tireName() }}</h2>
      <div class="price-wrapper">
        <span class="card-price">{{ tire.price }} &#8372;</span>
        <AppButton
          icon
          @click="toogleFavorites"
        >
          <font-awesome-icon
            :icon="['fas', 'heart']"
            :class="{ 'favorites-icon': favorites }"
          />
        </AppButton>
      </div>

      <AppButton
        class="card-btn"
        label="Buy"
      />
    </div>

    <div
      v-if="hover"
      class="info"
    >
      <!-- <ul class="info-list">
        <li class="info-item">
          <span class="info-name">Brand:</span>
          <span class="info-dots"></span>
          <span class="info-text">
            {{ tire.brand[0].toUpperCase() + tire.brand.slice(1) }}
          </span>
        </li>
        <li class="info-item">
          <span class="info-name">Type:</span>
          <span class="info-dots"></span>
          <span class="info-text">{{ tire.type }}</span>
        </li>
        <li class="info-item">
          <span class="info-name">Season:</span>
          <span class="info-dots"></span>
          <span class="info-text">{{ tire.season }}</span>
        </li>
        <li class="info-item">
          <span class="info-name">Diameter:</span>
          <span class="info-dots"></span>
          <span class="info-text">{{ tire.diameter }}</span>
        </li>
      </ul> -->

      <ul class="info-list">
        <li
          v-for="info of infoArr"
          :key="info.name"
          class="info-item"
        >
          <span class="info-name">{{ info.name }}</span>
          <span class="info-dots"></span>
          <span class="info-text">{{ info.text }}</span>
        </li>
      </ul>

      <AppButton
        class="info-btn"
        label="Details"
      />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.card
  position: relative
  width: 274px
  background: $background
  border: 1px solid $border
  border-radius: 7px
  padding: 20px

.card:hover
  box-shadow: 0px 2px 22px 2px rgba(108,25,179,0.5)

.img-wrapper
  display: flex
  justify-content: center
  align-items: center
  margin-bottom: 20px
  width: 232px
  height: 232px

.card-img
  width: 100%
  height: 100%
  border-top-left-radius: 7px
  border-top-right-radius: 7px
  background: $background
  transition: all 0.3s ease

.card-img-def
  width: 30%
  height: 30%

.card:hover .card-img
  transform: scale(1.1)

.card-name
  font-size: 18px
  font-weight: 700

.price-wrapper
  display: flex
  justify-content: space-between
  align-items: center
  margin-bottom: 10px

.favorites-icon
  color: $heart

.card-btn, .info-btn
  width: 100%

.info
  position: absolute
  bottom: -180px
  left: -1px
  padding: 20px
  width: 274px
  background: $background
  border: 1px solid $border
  border-top: none
  border-bottom-left-radius: 7px
  border-bottom-right-radius: 7px
  box-shadow: 0px 12px 22px 2px rgba(108,25,179,0.5)
  z-index: 3

.info-list
  display: flex
  flex-direction: column
  gap: 2px
  margin-bottom: 10px

.info-item
  display: flex
  align-items: flex-end

.info-item .info-dots
  flex-grow: 1
  border-bottom: 1px dotted $text

.info-item .info-text
  flex-basis: 120px
  white-space: nowrap
  overflow: hidden
</style>
