// 5: Write a function that takes an array of string as input and returns the sorted in ascending order.
// Sample Input: ["cat", "dog", "apple", "banana", "elephant"]
// Expected Output:["apple", "banana", "cat", "dog", "elephant"]

let arr = ["cat", "dog", "apple", "banana", "elephant"];

function asc() {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].charAt(0) > arr[j + 1].charAt(0)) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

asc();
console.log(arr);
