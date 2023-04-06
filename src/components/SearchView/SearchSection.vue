<script setup>
import Button from "../Button.vue";
import Input from "../Input.vue";
import { isEmpty } from "../../utils/check";
import { useWeatherStore } from "../../store/weatherStore";
import { processWeatherData } from "../../composable/useWeatherData";
import { showNotification } from "../../utils/showNotification";

const store = useWeatherStore();

function searchWeatherData() {
  if (isEmpty(store.city)) {
    showNotification("Input is empty.");
    return;
  }

  processWeatherData();
}
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
      <Button
        :button-fn="searchWeatherData"
        class="is-tertiary b-sixth w-100 is-large"
        >Search</Button
      >
    </div>
  </div>
</template>
