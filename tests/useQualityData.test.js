import { describe, expect, it } from "vitest";
import { createQualityArray } from "../src/composable/useQualityData";

describe("suite quality data composable", () => {
  it("create a quality array", () => {
    const object = {
      firstKey: {
        concentration: 100,
      },
      secondKey: {
        concentration: 150,
      },
    };

    const dataArray = createQualityArray(object);

    const result = [
      { name: "firstKey", value: 100 },
      { name: "secondKey", value: 150 },
    ];

    expect(dataArray).toEqual(result);
  });
});
