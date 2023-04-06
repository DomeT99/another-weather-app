import { reactive, ref, watch } from "vue";
import { defineStore } from "pinia";
import { processAirPollution } from "../composable/useQualityData";
import { isOffline } from "../utils/check";
import router from "../router/index";

export const useAirPollutionStore = defineStore("air-pollution", () => {
  const coordinates = reactive({
    latitude: 0,
    longitude: 0,
  });
  const qualityData = ref([]);

  function getPosition() {
   
    if (isOffline()) {
      router.push("/offline");
      return;
    }
    
    navigator.geolocation.getCurrentPosition((position) => {
      coordinates.latitude = position.coords.latitude;
      coordinates.longitude = position.coords.longitude;
    });
  }

  watch(coordinates, () => processAirPollution());

  return { getPosition, qualityData, coordinates };
});
