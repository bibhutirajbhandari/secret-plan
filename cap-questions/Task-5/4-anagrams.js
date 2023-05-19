// 4) Write a function that takes two strings as input and returns true if they are anagrams of each other, and false otherwise. An anagram is a word or phrase formed by rearranging the letters of another word or phrase. For example, "listen" and "silent" are anagrams of each other.
// Sample Input: "listen", "silent"
// Expected Output: true
// Sample Input: "hello", "world"
// Expected Output: false

let w1 = "len";
let w2 = "silent";

function anagram() {
  a = w1.toLowerCase();
  b = w2.toLowerCase();

  a = w1.split("").sort().join("");
  b = w2.split("").sort().join("");

  return a === b;
}

console.log(anagram());
