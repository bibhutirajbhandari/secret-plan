// 3: Write a program that uses a for loop to reverse the order of the elements in an array.
// Sample input: [1, 2, 3, 4, 5]
// Expected output: [5, 4, 3, 2, 1]

const arr = [1, 2, 3, 4, 5];
let revarr = [];

function rev() {
  for (let i = arr.length - 1; i >= 0; i--) {
    revarr.push(arr[i]);
  }
}

rev();
console.log(revarr);
