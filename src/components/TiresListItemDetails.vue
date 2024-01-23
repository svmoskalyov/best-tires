<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useTiresStore } from '@/stores/tires'
import AppButton from './shared/AppButton.vue'
import AppInfoList from './shared/AppInfoList.vue'

const route = useRoute()
const tiresStore = useTiresStore()

const tire = tiresStore.getTireById(route.params.id)

const favorites = ref(false)
const infoList = ref([
  {
    name: 'Brand',
    value: tire.brand[0].toUpperCase() + tire.brand.slice(1)
  },
  { name: 'Type', value: tire.type },
  { name: 'Season', value: tire.season },
  { name: 'Diameter', value: tire.diameter },
  { name: 'Width', value: tire.width },
  { name: 'Profile', value: tire.profile }
])

function tireName() {
  const { brand, width, profile, diameter } = tire
  const nameTire =
    brand.toUpperCase() + ' ' + width + '/' + profile + ' ' + diameter
  return nameTire
}

function toogleFavorites() {
  favorites.value = !favorites.value
}
</script>

<template>
  <div class="details">
    <AppButton
      label="Go back"
      @click="$router.go(-1)"
    ></AppButton>

    <div class="details-content">
      <div class="details-main">
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
      </div>

      <h2 class="card-characteristics-title">
        {{ 'Characteristics'.toUpperCase() }}
      </h2>
      <AppInfoList :list="infoList" />
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.details
  padding: 20px

.details-content
  margin: 20px auto 0
  padding: 20px
  max-width: 620px

.details-main
  display: flex
  justify-content: space-between
  margin-bottom: 40px

.img-wrapper
  display: flex
  justify-content: center
  align-items: center
  width: 232px
  height: 232px

.card-img
  width: 100%
  height: 100%

.card-img-def
  width: 30%
  height: 30%

.card-info
  display: flex
  flex-direction: column
  align-items: center
  justify-content: space-evenly
  width: 50%

.card-name
  font-size: 22px
  font-weight: 700

.price-wrapper
  display: flex
  justify-content: space-around
  align-items: center
  width: 100%

.favorites-icon
  color: $heart

.card-btn
  width: 100%
  max-width: 232px

.card-characteristics-title
  font-size: 18px
  font-weight: 700
  line-height: 2.2
</style>
