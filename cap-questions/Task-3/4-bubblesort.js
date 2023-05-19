// 4: Write a function that takes an array of numbers as input and returns the same array sorted in ascending order using bubble sort.
// Sample Input: [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
// Expected Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

function sort() {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(arr[i], arr[i + 1]);
  }
  return arr;
}

console.log(sort());
