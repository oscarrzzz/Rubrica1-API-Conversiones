const express = require("express");
const router = express.Router();
const {
  convertCelsiusToFahrenheit,
  convertFahrenheitToCelsius,
  convertKmToMiles,
} = require("../controllers/controllerConversiones");

router.get("/celsius-to-fahrenheit/:value", convertCelsiusToFahrenheit);
router.get("/fahrenheit-to-celsius/:value", convertFahrenheitToCelsius);
router.get("/km-to-miles/:value", convertKmToMiles);

module.exports = router;
