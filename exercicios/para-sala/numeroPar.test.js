const checkEvenNumber = require('./numeroPar');

test("Check if the number is even", () => {
  expect(checkEvenNumber(2)).toEqual("2 é um número par")
});

test("Check if the number is odd", () => {
  expect(checkEvenNumber(1)).toEqual("1 é um número ímpar")
});

test("Check if is not a number", () => {
  expect(checkEvenNumber("string")).toEqual("string não é um número")
});