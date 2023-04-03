<script setup>
import GeoLocation from "../components/AirPollution/GeoLocationSection.vue";
import ResultSection from "../components/Result.vue";
import { useAirPollutionStore } from "../store/airPollutionStore";

const store = useAirPollutionStore();
</script>

<template>
  <GeoLocation></GeoLocation>
  <hr />
  <ResultSection
    :data-fetch="store.qualityData"
    v-if="store.qualityData.length > 0"
  ></ResultSection>
</template>
