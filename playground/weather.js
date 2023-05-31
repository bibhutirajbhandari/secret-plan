const axios = require("axios");
const express = require("express");

const app = express();

app.listen(3000, () => console.log("server running on port 3000"));

app.get("/weather", (req, res) => {
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=27.700769&lon=85.300140&appid=24586a321a4110eb8e15a1f249b602cb&units=metric";

axios
  .get(url)
  .then(async (res) => {
    const data = await res;
    console.log(data);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
});
