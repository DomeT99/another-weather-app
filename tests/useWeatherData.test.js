import { describe, expect, it, beforeEach } from "vitest";
import {
  insertWeatherData,
  composeName,
} from "../src/composable/useWeatherData";
import { setActivePinia, createPinia } from "pinia";
import { useWeatherStore } from "../src/store/weatherStore";

describe("suite weather data composable", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("create a weather array", () => {
    const store = useWeatherStore();
    const object = {
      coord: {
        lon: 13.1667,
        lat: 43.55,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      base: "stations",
      main: {
        temp: 279.92,
        feels_like: 278.52,
        temp_min: 278.81,
        temp_max: 280.97,
        pressure: 1017,
        humidity: 67,
      },
      visibility: 10000,
      wind: {
        speed: 2.06,
        deg: 190,
      },
      clouds: {
        all: 100,
      },
      dt: 1680704290,
      sys: {
        type: 2,
        id: 2012704,
        country: "IT",
        sunrise: 1680669757,
        sunset: 1680716239,
      },
      timezone: 7200,
      id: 3183087,
      name: "Provincia di Ancona",
      cod: 200,
    };

    insertWeatherData(object);

    const result = [
      { name: "Temperature", value: 279.53 },
      { name: "Pressure", value: 1017 },
      { name: "Humidity", value: 69 },
    ];

    expect(store.weatherData.dataFetch).toEqual(result);
  });

  it("test function to compose name", () => {
    const object = {
      temp: 279.53,
    };

    const result = composeName(Object.keys(object)[0]);

    expect(result).toEqual("Temperature");
  });
});
