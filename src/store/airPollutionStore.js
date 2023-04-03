import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";
import { getAirPollution } from "../composable/useQualityData";

export const useAirPollutionStore = defineStore("air-pollution", () => {
  const coordinates = reactive({
    latitude: 0,
    longitude: 0,
  });
  const qualityData = ref([]);

  function enableGeolocation() {
    if (navigator.onLine) {
      navigator.geolocation.getCurrentPosition((position) => {
        coordinates.latitude = position.coords.latitude;
        coordinates.longitude = position.coords.longitude;
      });
    }
    //TODO ELSE
  }

  watch(coordinates, () => getAirPollution());

  return { enableGeolocation, qualityData, coordinates };
});
