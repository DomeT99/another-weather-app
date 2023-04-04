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

  const response = await useFetch(parameters);

  insertQualityData(response);
}

export function insertQualityData(object) {
  const store = useAirPollutionStore();
 
  Object.keys(object).forEach((key) => {
    if (!isObject(object[key])) {
      return;
    }

    const data = {
      name: key.toString(),
      value: object[key].concentration,
    };

    store.qualityData.push(data);
  });
}

