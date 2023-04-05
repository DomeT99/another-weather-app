import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useWeatherStore = defineStore("weather", () => {
  const city = ref("");
  const weatherData = reactive({ city: "", dataFetch: [] });

  return { city, weatherData };
});
