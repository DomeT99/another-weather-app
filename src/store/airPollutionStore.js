import { defineStore } from "pinia";
import { reactive, watch } from "vue";

export const useAirPollutionStore = defineStore("air-pollution", () => {
  const coordinates = reactive({
    latitude: 0,
    longitude: 0,
  });


  watch(coordinates, () => getAirPollution());

  
  function enableGeolocation() {
    if (navigator.onLine) {
      navigator.geolocation.getCurrentPosition((position) => {
        coordinates.latitude = position.coords.latitude;
        coordinates.longitude = position.coords.longitude;
      });
    }
  }
  async function getAirPollution() {
    try {
     //TODO
    } catch (e) {
      throw e;
    }
  }

  return { enableGeolocation };
});
