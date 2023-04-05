import { describe, expect, it } from "vitest";
import { useFetch } from "../src/composable/useFetch";

describe.skip("suite fetch composable", () => {
  it.skip("use fetch", () => {
    const parameters = {
      url: `${import.meta.env.VITE_URL_AIRPOLLUTION}?lat=${333}&lon=${343}`,
      key: import.meta.env.VITE_KEY_AIRPOLLUTION,
      host: import.meta.env.VITE_HOST_AIRPOLLUTION,
    };

    const response = useFetch(parameters);

    expect(response).not.toBeUndefined();
  });
});
