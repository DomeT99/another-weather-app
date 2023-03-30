import { defineStore } from "pinia";
import { reactive, watch } from "vue";
import { useFetch } from "../composable/useFetch";

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
    //TODO
    const parameters = {
      url: `${import.meta.env.VITE_URL_AIRPOLLUTION}?lat=${
        coordinates.latitude
      }&lon=${coordinates.longitude}`,
      key: import.meta.env.VITE_KEY_AIRPOLLUTION,
      host: import.meta.env.VITE_HOST_AIRPOLLUTION,
    };

    try {
      const response = await useFetch(parameters);
    } catch (e) {
      throw e;
    }
  }

  return { enableGeolocation };
});
