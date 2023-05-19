// 7: Write a program that takes a list of words as input and returns a new list that contains only the words that have more than five letters.
// Sample Input: words = ["apple", "banana", "orange", "grapefruit"]
// Expected Output: ["banana", "orange", "grapefruit"]

const words = ["apple", "banana", "orange", "grapefruit"];
let fiveletters = [];

words.forEach((element) => {
  isFive(element);
});
console.log(fiveletters);

function isFive(e) {
  if (e.length > 5) {
    fiveletters.push(e);
  }
  return;
}
