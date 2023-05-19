// 3: Write a program that takes a string as input and prints the reverse of the string to the console.
// Sample Input: str = "Hello, world!"
// Expected Output: !dlrow ,olleH

const str = "Hello, world!";
let revString = "";

function rev(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    revString += str[i];
  }
  return revString;
}

console.log(rev(str));
