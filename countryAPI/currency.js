const url = "https://restcountries.com/v3.1/all";

async function currencies() {
  const res = await fetch(url);
  const content = await res.json();

  content.forEach((element) => {
    if (element.currencies === undefined) return;
    if (element.currencies.USD !== undefined) {
      console.log(element.name.common);
    }
  });
}

currencies();

// async function parse(res) {
//   // const jsondata = res.json();
//   // let usdCountry = [];

//   await res
//     .json()
//     .then((content) => {})
//     .catch((err) => {
//       console.log("Error: ", err);
//     });

//   // do something
// }

// await fetch(url)
//   .then((res) => {
//     // if (res.status === 200) {
//     // return parse(res);
//     return res.json();
//     // } else {
//     //   console.log("response unsuccessful");
//     // }
//   })
//   .then((content) => {
//     content.forEach((element) => {
//       if (element.currencies === undefined) return;
//       if (element.currencies.USD !== undefined) {
//         console.log(element.name.common);
//       }
//     });
//   })
//   .catch((err) => {
//     console.log("Error: ", err);
//   });

// let result = await fetch(url);
// let countries = await result.json();
// countries.forEach((element) => {
//   if (element.currencies === undefined) return;
//   if (element.currencies.USD !== undefined) {
//     console.log(element.name.common);
//   }
// });

// console.log("countries retrieved");
