import { defineStore } from "pinia";
import { ref } from "vue";

export const useWeatherStore = defineStore("weather", () => {
  const city = ref("");
  const weatherData = ref([]);

  return { city, weatherData };
});
