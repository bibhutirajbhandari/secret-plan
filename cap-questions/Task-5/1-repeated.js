// 1) Write a function that takes a sentence as input and returns the word with the highest
//number of repeated letters.
// For example, given the input sentence "The quick brown fox jumps over the lazy dog",
// the function should return "jumps".
// Sample Input: "The quick brown fox jumps over the lazy dog"
// Expected Output: "jumps"
// Sample Input: "She sells seashells by the seashore"
// Expected Output: "seashells"

let input = "She sells seashells by the seashore ssccddyy";
console.log(repeated(input));

function repeated() {
  let arr = input.split(" ");
  let map = new Map();
  let map1 = new Map();

  arr.forEach((e) => {
    map.clear();
    for (let i = 0; i < e.length; i++) {
      if (!map.has(e[i])) {
        map.set(e[i], 1);
      } else {
        let count = map.get(e[i]);
        map.set(e[i], ++count);
      }
    }

    let repeatedcount = 0;
    for (let value of map.values()) {
      if (value > 1) {
        repeatedcount++;
      }
      map1.set(e, repeatedcount);
    }
  });
  console.log(map1);

  let maxword = " ";
  let maxrepeat = 0;

  for (let [key, value] of map1) {
    if (value > maxrepeat) {
      maxrepeat = value;
      maxword = key;
    }
  }
  return maxword === " " ? "no repeated letters in a word found" : maxword;
}
