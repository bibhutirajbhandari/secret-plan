// 3: Write a function that takes an array of integers as input and returns a new array where each element is the product of all the elements in the original array except for the element at the current index.
// Sample Input: [1,2, 3, 4 ]
// Expected Output: [24, 12, 8, 6]

let res = [];

function multiply() {
  let arr = [1, 2, 3, 4];
  for (let i = 0; i < arr.length; i++) {
    let mul = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j === i) {
        continue;
      }
      mul *= arr[j];
    }
    res.push(mul);
  }
}

multiply();
console.log(res);
