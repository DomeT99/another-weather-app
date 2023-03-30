import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";
import { useFetch } from "../composable/useFetch";

export const useAirPollutionStore = defineStore("air-pollution", () => {
  const coordinates = reactive({
    latitude: 0,
    longitude: 0,
  });
  const qualityData = ref([]);

  async function getAirPollution() {
    const parameters = {
      url: `${import.meta.env.VITE_URL_AIRPOLLUTION}?lat=${
        coordinates.latitude
      }&lon=${coordinates.longitude}`,
      key: import.meta.env.VITE_KEY_AIRPOLLUTION,
      host: import.meta.env.VITE_HOST_AIRPOLLUTION,
    };

    try {
      const response = await useFetch(parameters);

      insertQualityData(response);
    } catch (e) {
      throw e;
    }
  }
  function insertQualityData(response) {
    Object.keys(response).forEach((element) => {
      const data = {
        name: element.toString(),
        value: response[element].concentration,
      };

      qualityData.value.push(data);
    });
  }
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

  return { enableGeolocation, qualityData };
});
