import { useFetch } from "./useFetch";
import { useWeatherStore } from "../store/weatherStore";

export async function getWeatherData() {
  debugger;
  const store = useWeatherStore();

  const parameters = {
    url: `${import.meta.env.VITE_URL_WEATHER}&q=${store.city}`,
    key: import.meta.env.VITE_KEY_WEATHER,
    host: import.meta.env.VITE_HOST_WEATHER,
  };

  const response = await useFetch(parameters);

  console.log(response);
}
