// 5: Write a program that takes a list of numbers as input and returns the largest number in the list.
// Sample Input: numbers = [10, 5, 20, 15]
// Expected Output: 20

const num = [10, 5, 20, 50];

console.log(max(num));

function max(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
