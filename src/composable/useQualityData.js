import { useFetch } from "./useFetch";
import { isObject } from "../utils/check";
import { useAirPollutionStore } from "../store/airPollutionStore";

async function processAirPollution() {
  
  const store = useAirPollutionStore();

  const response = await getAirPollution();

  insertQualityData(response, store.qualityData);
}

async function getAirPollution() {
  const store = useAirPollutionStore();

  const parameters = {
    url:
      import.meta.env.VITE_URL_AIRPOLLUTION +
      "?lat=" +
      store.coordinates.latitude +
      "&lon=" +
      store.coordinates.longitude,
    key: import.meta.env.VITE_KEY_AIRPOLLUTION,
    host: import.meta.env.VITE_HOST_AIRPOLLUTION,
  };
  const response = await useFetch(parameters);

  return response;
}

function insertQualityData(object, qualityData) {
  Object.keys(object).forEach((key) => {
    if (!isObject(object[key])) {
      return;
    }

    const data = {
      name: key.toString(),
      value: object[key].concentration,
    };

    qualityData.push(data);
  });
}

export { processAirPollution, insertQualityData };
