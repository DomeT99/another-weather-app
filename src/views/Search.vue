<script setup>
import SearchSection from "../components/SearchView/SearchSection.vue";
import ResultSection from "../components/Result.vue";
import { useWeatherStore } from "../store/weatherStore";

const store = useWeatherStore();
</script>

<template>
  <SearchSection></SearchSection>
  <hr />
  <ResultSection
    :city="store.weatherData.city"
    :data-fetch="store.weatherData.dataFetch"
    v-if="store.weatherData.dataFetch.length > 0"
  ></ResultSection>
</template>
