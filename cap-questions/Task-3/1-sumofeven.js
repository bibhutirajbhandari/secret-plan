// 1: Write a function that takes an array of numbers as input and returns the sum of all the even numbers in the array.
// Sample Input: [1, 2, 3, 4, 5, 6]
// Expected Output: 12

const arr = [1, 2, 3, 4, 5, 6, 6];

function sum() {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sum());
