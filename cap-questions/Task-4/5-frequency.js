// 5: Write a function that takes an array of integers as input and returns a new array containing all the elements that appear more than once in the original array, in the order in which they appear in the original array.
// Sample Input: [1, 2, 3, 2, 1, 4, 5, 4, 6]
// Expected Output: [2, 1, 4]

let map = new Map();
const arr = [1, 2, 3, 2, 1, 4, 5, 4, 6];
let res = [];

function freq() {
  let count;

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      count = map.get(arr[i]);
      map.set(arr[i], ++count);

      if (count > 1) {
        res.push(arr[i]);
      }
    } else {
      map.set(arr[i], 1);
    }
  }
}

freq();
console.log(res);
