const { maxSlidingWindow } = require("./slidingMax");

const testCases = [
  {
    input: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 },
    output: [3, 3, 5, 5, 6, 7],
  },
  {
    input: { nums: [1], k: 1 },
    output: [1],
  },
];

describe("maxSlidingWindow", () => {
  test.each(testCases)("$input => $output", ({ input, output }) => {
    expect(maxSlidingWindow(input)).toMatchObject(output);
  });
});
