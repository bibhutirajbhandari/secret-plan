// 2) Write a function that takes two arrays as input and returns a new array with the common elements between them. For example, given the input arrays [1, 2, 3, 4, 5] and [3, 4, 5, 6, 7], the function should return [3, 4, 5].
// Sample Input: [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// Expected Output: [3, 4, 5]
// Sample Input: [10, 20, 30], [40, 50, 60]
// Expected Output: []

let a1 = [1, 2, 3, 4, 5];
let a2 = [3, 4, 5, 6, 7];
let res = [];

function common() {
  let i = 0;
  while (i < a1.length) {
    for (let j = 0; j < a2.length; j++) {
      if (a1[i] === a2[j]) {
        res.push(a1[i]);
        break;
      }
    }
    i++;
  }
  return res;
}

console.log(common());
