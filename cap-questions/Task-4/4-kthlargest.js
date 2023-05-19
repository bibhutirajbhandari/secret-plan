// 4: Write a function that takes an array of integers as input and returns the kth largest element in the array.
// Sample Input: [3, 2, 1, 5, 6, 4], k=2
// Expected Output: 5

let map = new Map();
const arr = [3, 2, 1, 5, 6, 4, 7, 1, 1];
const k = 0;

function largest() {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("SORTED", arr); // [1,1,1,2..]
  // [1,1,2,...]

  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 0);
      unique.push(arr[i]);
    }
  }
  console.log("Unique array ", unique);

  return unique[unique.length - k];
}

console.log(largest());
