<script setup>
import { ref } from 'vue'
import AppButton from './shared/AppButton.vue'
import AppInfoList from './shared/AppInfoList.vue'
import { useTiresStore } from '@/stores/tires'
import { ROUTES_PATHS } from '@/constants/router'

const tiresStore = useTiresStore()
const props = defineProps({
  tire: {
    type: Object,
    required: true,
    default: () => {}
  }
})

const favorites = ref(false)
const infoList = ref([
  {
    name: 'Brand',
    value: props.tire.brand[0].toUpperCase() + props.tire.brand.slice(1)
  },
  { name: 'Type', value: props.tire.type },
  { name: 'Season', value: props.tire.season }
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

    <div class="info">
      <AppInfoList :list="infoList" />
      <AppButton
        class="info-btn"
        label="Details"
        @click="$router.push(`${ROUTES_PATHS.TIRES}/${tire.id}`)"
      />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.card
  width: 274px
  background: $background
  border: 1px solid $border
  border-radius: 7px
  padding: 20px
  transition: .2s

.card:hover
  box-shadow: 0px 2px 22px 2px rgba(108,25,179,0.8)
  border: 1px solid transparent

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
  transition: all 0.2s ease

.card-img-def
  width: 30%
  height: 30%

.card:hover .card-img
  transform: scale(1.05)

.card-info
  margin-bottom: 20px

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
</style>
