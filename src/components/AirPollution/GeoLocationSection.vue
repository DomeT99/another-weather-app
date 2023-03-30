<script setup>
import Button from "../Button.vue";
import { useAirPollutionStore } from "../../store/airPollutionStore";

const store = useAirPollutionStore();
</script>

<template>
  <div class="columns mt-12">
    <div class="column is-12 has-text-centered">
      <h2>To check the air quality in your area, you need Geolocation.</h2>
    </div>
  </div>
  <div class="columns mt-4">
    <div class="column is-2 is-4-mobile is-offset-5 is-offset-4-mobile">
      <Button :button-fn="store.enableGeolocation" class="is-tertiary b-sixth w-100 is-large">Active</Button>
    </div>
  </div>
</template>
