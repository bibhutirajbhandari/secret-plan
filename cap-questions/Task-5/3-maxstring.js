// 3) Write a function that takes an array of strings as input and returns the longest string in the array. For example, given the input array ["cat", "dog", "elephant", "giraffe"], the function should return "elephant".
// Sample Input: ["cat", "dog", "elephant", "giraffe"]
// Expected Output: "elephant"
// Sample Input: ["apple", "banana", "cherry"]
// Expected Output: "banana"

const arr = ["cat", "dog", "elephant", "giraffe"];

function max() {
  let max = arr[0].length;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  return max;
}

console.log(max());
