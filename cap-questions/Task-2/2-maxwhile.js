// 2: Write a program that uses a while loop to find the largest number in an array of numbers.
// Sample input: [10, 5, 20, 15]
// Expected output: 20

const arr = [10, 5, 20, 15];

function max() {
  let i = 0;
  let max = arr[0];

  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  return max;
}

console.log(max());
