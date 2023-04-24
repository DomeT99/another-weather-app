<script setup>
import { EButton, EText } from "easy-kit-component";
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
      <EText
        class="input is-large"
        :place-holder="'Search your city'"
        v-model="store.city"
      />
    </div>
    <div class="column is-2">
      <EButton
        @click="searchWeatherData"
        class="button is-tertiary b-sixth w-100 is-large"
      >
        Search
      </EButton>
    </div>
  </div>
</template>
