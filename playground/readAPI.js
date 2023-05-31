const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=27.700769&lon=85.300140&appid=24586a321a4110eb8e15a1f249b602cb&units=metric";
//query location: lat and lon

fetch(url)
  .then(async (res) => {
    const jsondata = await res.json(); //awaits pending promise

    console.log("Weather Details: ");
    console.log("Location : ", jsondata.name, ",", jsondata.sys.country);
    console.log("Main : ", jsondata.weather[0].main);
    console.log("Description :", jsondata.weather[0].description);
    console.log("Current temp: ", jsondata.main.temp);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
