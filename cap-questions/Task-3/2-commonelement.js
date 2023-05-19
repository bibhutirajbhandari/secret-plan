// 2: Write a function that takes two arrays of numbers as input and returns a new array containing the elements that are common to both arrays.
// Sample Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Expected Output: [3,4]

const a1 = [1, 2, 3, 4];
const a2 = [3, 4, 5, 6];

let res = [];

function common() {
  for (let i = 0; i < a1.length; i++) {
    if (a2.includes(a1[i])) {
      res.push(a1[i]);
    }
  }
  return res;
}

console.log(common());
