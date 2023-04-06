import { useFetch } from "./useFetch";
import { useWeatherStore } from "../store/weatherStore";

async function processWeatherData() {
  clearWeatherData();

  const response = await getWeatherData();

  insertWeatherData(response);
}

function clearWeatherData() {
  const store = useWeatherStore();

  const blankObj = {
    city: "",
    dataFetch: [],
  };

  store.weatherData = Object.assign({}, blankObj);
}

async function getWeatherData() {
  const store = useWeatherStore();

  const parameters = {
    url: `${import.meta.env.VITE_URL_WEATHER}&q=${store.city}`,
    key: import.meta.env.VITE_KEY_WEATHER,
    host: import.meta.env.VITE_HOST_WEATHER,
  };

  const response = await useFetch(parameters);

  return response;
}

function insertWeatherData(object) {
  const store = useWeatherStore();
  const weatherData = object.main;

  Object.keys(weatherData).forEach((key) => {
    if (!isTrueKey(key)) {
      return;
    }

    const data = {
      name: composeName(key.toString()),
      value: weatherData[key],
    };
    store.weatherData.dataFetch.push(data);
  });

  store.weatherData.city = object.name;
}

function composeName(key) {
  switch (key) {
    case "temp":
      return "Temperature";

    case "humidity":
      return "Humidity";

    case "pressure":
      return "Pressure";
  }
}

function isTrueKey(key) {
  return key === "temp" || key === "humidity" || key === "pressure";
}

export { processWeatherData, insertWeatherData, composeName };
