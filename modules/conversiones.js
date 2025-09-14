function celsiusToFahrenheit(value) {
  return (value * 9) / 5 + 32;
}

function fahrenheitToCelsius(value) {
  return ((value - 32) * 5) / 9;
}

function kmToMiles(value) {
  return value * 0.621371;
}

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius, kmToMiles };
