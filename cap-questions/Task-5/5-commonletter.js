// 5)Write a function that takes a string as input and returns the most common character
// in the string. If there are multiple characters with the same highest frequency,
// return the one that comes first in the string. For example, given the input string
//"hello world", the function should return "l".
// Sample Input: "hello world"
// Expected Output: "l"
// Sample Input: "JavaScript is awesome"
// Expected Output: "e"

const input = "hello worlddd";
const map = new Map();
let obj = {};

function common() {
  let previousCount;

  let str = input.replace(" ", "");

  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      previousCount = map.get(str[i]);
      map.set(str[i], ++previousCount);
    } else {
      map.set(str[i], 1);
    }
  }

  let res;
  let max = map.get(str[0]);

  for (let [key, value] of map) {
    if (value > max) {
      max = value;
      res = key;
    }
  }
  return res;
}

console.log(common());
