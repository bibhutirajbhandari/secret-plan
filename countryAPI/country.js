const country = process.argv.slice(2);
const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`;

const response = fetch(url);
response
  .then((res) => {
    if (res.status === 200) {
      parse(res);
    } else {
      console.log("response unsuccessful");
    }
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

function parse(res) {
  const jsondata = res.json();

  jsondata
    .then((content) => {
      const result = {
        official_name: content[0].name.official,
        common_name: content[0].name.common,
        code: content[0].cca2,
        capital: content[0].capital[0],
        continent: content[0].continents[0],
        timezone: content[0].timezones,
        currency: content[0].currencies.USD,
      };
      console.log(typeof content[0].currencies.USD);
      console.log(result);
    })
    .catch((err) => {
      console.log("Error: Error parsing the data");
    });
}
