import { useFetch } from "./useFetch";
import { useWeatherStore } from "../store/weatherStore";

export async function getWeatherData() {
  const store = useWeatherStore();

  const parameters = {
    url: `${import.meta.env.VITE_URL_WEATHER}&q=${store.city}`,
    key: import.meta.env.VITE_KEY_WEATHER,
    host: import.meta.env.VITE_HOST_WEATHER,
  };

  const response = await useFetch(parameters);

  //insertWeatherData(response);
  console.log(response);
}

export function insertWeatherData(object) {
  const store = useWeatherStore();

  Object.keys(object).forEach((key) => {
    const data = {
      name: composeName(key.toString()),
      value: key,
    };

    store.weatherData.city = key.name;
    store.weatherData.dataFetch.push(data);
  });
}

export function composeName(key) {
  switch (key) {
    case "temp":
      return "Temperature";

    case "humidity":
      return "Humidity";

    case "pressure":
      return "Pressure";
  } 
}
 