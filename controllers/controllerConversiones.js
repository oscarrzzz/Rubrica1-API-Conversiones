const {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  kmToMiles,
} = require("../modules/conversiones.js");

exports.convertCelsiusToFahrenheit = (req, res) => {
  const value = parseFloat(req.params.value);
  if (isNaN(value)) return res.status(400).json({ error: "Valor inválido" });

  res.json({ celsius: value, fahrenheit: celsiusToFahrenheit(value) });
};

exports.convertFahrenheitToCelsius = (req, res) => {
  const value = parseFloat(req.params.value);
  if (isNaN(value)) return res.status(400).json({ error: "Valor inválido" });

  res.json({ fahrenheit: value, celsius: fahrenheitToCelsius(value) });
};

exports.convertKmToMiles = (req, res) => {
  const value = parseFloat(req.params.value);
  if (isNaN(value)) return res.status(400).json({ error: "Valor inválido" });

  res.json({ km: value, miles: kmToMiles(value) });
};
