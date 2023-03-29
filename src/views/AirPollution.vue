<script setup>
import GeoLocation from "../components/AirPollution/GeoLocationSection.vue";
import ResultSection from "../components/Result.vue";
//CO = Monossido di carbonio
//NO2 = Biossido di azoto
//O3 = Ozono
//SO2 = Biossido di zolfo
</script>

<template>
  <GeoLocation></GeoLocation>
  <hr />
  <ResultSection v-if="false"></ResultSection>
</template>
