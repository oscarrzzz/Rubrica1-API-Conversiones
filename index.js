const express = require("express");
const app = express();
const conversionesRoutes = require("./routes/conversionesRoutes");

app.use("/convert", conversionesRoutes);

const port = 3000;
app.listen(port, () => {
  console.log("API de conversiones corriendo en http://localhost: " + port);
});
