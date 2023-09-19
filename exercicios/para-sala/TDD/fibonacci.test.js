// 8

const fibonacciSeq = require('./fibonacci');

describe("Fibonacci function", () => {
  test("Check Fibonacci sequence", () => {
    const output = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    
    expect(fibonacciSeq(13)).toEqual(output);
  });
});
