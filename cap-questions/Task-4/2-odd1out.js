// 2: Write a program that removes the odd one in the sequence.
// Sample Input: [1,2,3,6,4,5,9,6,7,20,8]
// Expected Output: [1,2,3,4,5,6,7,8]

let arr = [4, 2, 3, 6, 4, 5, 9, 6, 7, 20, 8];

function odd1out() {
  if (arr[0] > arr[1]) {
    arr.splice(0, 1);
  }

  for (let i = 1; i < arr.length - 1; i++) {
    const left = arr[i - 1];
    const mid = arr[i];
    const right = arr[i + 1];
    if (!(left <= mid && mid <= right)) {
      arr.splice(i, 1);
    }
  }
  if (arr[arr.length - 1] < arr[arr.length - 2]) {
    arr.splice(arr.length - 1, 1);
  }

  return arr;
}

console.log(odd1out());
