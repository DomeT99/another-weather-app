<script setup>
import Button from "../Button.vue";
import Input from "../Input.vue";
import { useWeatherStore } from "../../store/weatherStore";
import { processWeatherData } from "../../composable/useWeatherData";

const store = useWeatherStore();
</script>

<template>
  <div class="columns mt-12">
    <div class="column is-10">
      <Input
        :value="store.city"
        v-model="store.city"
        :type="'text'"
        :place-holder="'Search your city'"
      />
    </div>
    <div class="column is-2">
      <Button :button-fn="processWeatherData" class="is-tertiary b-sixth w-100 is-large">Search</Button>
    </div>
  </div>
</template>
