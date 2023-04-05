import { describe, expect, it } from "vitest";
import {
  insertWeatherData,
  composeName,
} from "../src/composable/useWeatherData";

describe("suite weather data composable", () => {
  it.skip("create a weather array", () => {
    const object = {
      weather: [
        {
          main: "Clouds",
        },
      ],
      main: {
        temp: 279.53,
        pressure: 1017,
        humidity: 69,
      },
      name: "Provincia di Ancona",
    };

    const dataArray = insertWeatherData(object);

    const result = {
      city: "Provincia di Ancona",
      dataFetch: [
        { name: "Temperature", value: 279.53 },
        { name: "Humidity", value: 69 },
        { name: "Pressure", value: 1017 },
      ],
    };

    expect(dataArray).toEqual(result);
  });

  it("compose name", () => {
    const object = {
      temp: 279.53,
      pressure: 1017,
      humidity: 69,
    };

    const result = composeName(Object.keys(object)[0]);
    
    expect(result).toEqual("Temperature");
  });
});
