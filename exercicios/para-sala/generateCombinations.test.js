const generateCombinations = require("./generateCombinations")

describe("Tests with word", () => {
  test("Generate combinations for 'abc'", () => {
    expect(generateCombinations("abc")).toEqual(["a", "b", "ab", "c", "ac", "bc", "abc"]);
  });

  test("Generate combinations for 'abc'", () => {
    expect(generateCombinations("")).toEqual([]);
  });
})