const convertCelsiusToFahrenheit = require('./conversorTemp')

test("Check the conversion of Celsius to Fahrenheit", () => {
  expect(convertCelsiusToFahrenheit(35)).toEqual(95);
})

test("Check conversion of Celsius to Fahrenheit", () => {
  expect(convertCelsiusToFahrenheit(40)).toEqual(104);
})