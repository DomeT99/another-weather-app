import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";
import { getAirPollution } from "../composable/useQualityData";
import { isOffline } from "../utils/check";
import router from "../router/index";

export const useAirPollutionStore = defineStore("air-pollution", () => {
  const coordinates = reactive({
    latitude: 0,
    longitude: 0,
  });
  const qualityData = ref([]);

  function enableGeolocation() {
   
    if (isOffline()) {
      router.push("/offline");
      return;
    }
    
    navigator.geolocation.getCurrentPosition((position) => {
      coordinates.latitude = position.coords.latitude;
      coordinates.longitude = position.coords.longitude;
    });
  }

  watch(coordinates, () => getAirPollution());

  return { enableGeolocation, qualityData, coordinates };
});
