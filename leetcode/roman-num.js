// Given a roman numeral, convert it to an integer.

let roman = "MDXL";
const obj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// const data = new Map(Object.entries(obj));
// console.log(data);

let map = new Map();
let sum = 0;

function romannum() {
  for (let i = 0; i < roman.length; i++) {
    if (!map.hasroman[i]) {
      map.set(roman[i], 1);
      sum += obj.roman[i];
    } else {
      let freq = map.get(roman[i]);
      map.set(roman[i], ++freq);
    }
  }
}
