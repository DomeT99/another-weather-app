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
    :data-fetch="store.weatherData"
    v-if="store.weatherData.length > 0"
  ></ResultSection>
</template>
