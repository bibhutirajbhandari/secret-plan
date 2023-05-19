// 1) Write a function to find the length of the longest consecutive sequence of a given array.
// Sample Input: [1, 2, 3, 4, 5, 6]
// Expected Output: 6
// Sample Input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// Expected Output: 10
// Input: [1, 2, 3, 5, 6, 7]
// Output: 3

const arr = [1, 2, 2, 3, 5, 6];
let longestConsecutive = [];
function consecutive() {
  let count = 0;

  arr.sort();

  arr[0] < arr[arr.length - 1] ? (isAsc = true) : false;
}

console.log(consecutive());
