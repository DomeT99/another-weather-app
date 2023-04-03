import { useAirPollutionStore } from "../store/airPollutionStore";
import { useFetch } from "./useFetch";
import { isObject } from "../utils/check";

export async function getAirPollution() {
  const store = useAirPollutionStore();

  const parameters = {
    url: `${import.meta.env.VITE_URL_AIRPOLLUTION}?lat=${
      store.coordinates.latitude
    }&lon=${store.coordinates.longitude}`,
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

export function insertQualityData(object) {
  const dataArray = createQualityArray(object);

  const store = useAirPollutionStore();

  dataArray.forEach((data) => {
    store.qualityData.push(data);
  });
}

export function createQualityArray(object) {
  const dataArray = [];

  Object.keys(object).forEach((key) => {
    if (isObject(object[key])) {
      const data = {
        name: key.toString(),
        value: object[key].concentration,
      };

      dataArray.push(data);
    }
  });

  return dataArray;
}
