// 1: Write a program that uses a for loop to calculate the sum of all the odd numbers between two given numbers (inclusive).
// Sample input: start = 3, end = 8
// Expected output: 15

const start = 1;
const end = 7;

function sumofodd() {
  let sum = 0;
  for (let num = start + 1; num < end; num++) {
    if (num % 2 !== 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumofodd());
