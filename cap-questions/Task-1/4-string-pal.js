// 4: Write a program that takes a string as input and returns true if the string is a palindrome (i.e., the same forwards and backwards) and false otherwise.
// Sample Input: str = "racecar"
// Expected Output: true

const str = "rghj";
let rev = "";

function isPalindrome(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  return rev === str ? true : false;
}

console.log(isPalindrome(str));
