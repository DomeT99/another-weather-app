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
}

export function insertWeatherData(object) {
  const store = useWeatherStore();
  const weatherData = object.main;


  Object.keys(weatherData).forEach((key) => {
    const data = {
      name: composeName(key.toString()),
      value: weatherData[key],
    };
    store.weatherData.dataFetch.push(data);
  });

  store.weatherData.city = object.name;
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
