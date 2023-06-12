// const city = process.argv.slice(2);
const state = "CA";

const url = `https://api.openweathermap.org/data/2.5/weather?q=Bangalore,${Karnataka}&appid=24586a321a4110eb8e15a1f249b602cb&units=metric`;

//without async await
// function weather() {
//   const response = fetch(url);
//   response
//     .then((res) => {
//       if (res.status === 200) {
//         parser(res);
//       } else {
//         console.log("response not successful");
//       }
//     })
//     .catch((err) => {
//       console.log("ERROR: ", err);
//     });
// }

// function parser(res) {
//   const jsondata = res.json();

//   jsondata
//     .then((res) => {
//       console.log("Weather Details: ");
//       const data = {
//         name: res.name,
//         weather: res.weather[0].main,
//         desc: res.weather[0].description,
//         temp: res.main.temp,
//       };
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log("error parsing the data");
//     });
// }
// weather();

//with async-await
async function weather() {
  try {
    const response = await fetch(url);
    parser(response);
  } catch (err) {
    console.log("Error: ", err);
  }
}

async function parser(res) {
  try {
    const jsondata = await res.json();
    console.log(jsondata);

    const data = {
      name: jsondata.name,
      weather: jsondata.weather[0].main,
      desc: jsondata.weather[0].description,
      temp: jsondata.main.temp,
    };
    console.log(data);
  } catch (err) {
    console.log("error parsing the data");
  }
}

weather();
