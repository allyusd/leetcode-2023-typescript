import { exportWarp } from "../../src/p733";

describe("733. Flood Fill", () => {
  test.each([
    [
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2,
      [
        [2, 2, 2],
        [2, 2, 0],
        [2, 0, 1],
      ],
    ],
    [
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      0,
      0,
      0,
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
    ],
    // x, y 非對稱
    [
      [
        [1, 1, 1, 1],
        [1, 1, 0, 1],
        [1, 0, 1, 1],
      ],
      1,
      3,
      2,
      [
        [2, 2, 2, 2],
        [2, 2, 0, 2],
        [2, 0, 2, 2],
      ],
    ],
  ])("case", (image, sr, sc, color, expected) => {
    const result = exportWarp(image, sr, sc, color);
    expect(result).toStrictEqual(expected);
  });
});
