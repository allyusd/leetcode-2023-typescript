import { exportWarp } from "../../src/p6339";

describe("6339. Put Marbles in Bags", () => {
  test.each([
    [[1, 3, 5, 1], 2, 4],
    [[1, 3], 2, 0],
  ])("case %#", (weights, k, expected) => {
    const result = exportWarp(weights, k);

    expect(result).toStrictEqual(expected);
  });
});
