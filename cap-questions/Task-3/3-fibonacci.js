// 3: Write a function that takes a number as input and returns the nth Fibonacci number.
// Sample Input: 6
// Expected Output: 8

const index = 6; //fib series: 0 1 1 2 3 5 8 13
// let arr = [0, 1];
let res = 0;
let a = 0;
let b = 1;

function fibonacci() {
  if (index === 0) {
    return 0;
  }
  if (index === 1) {
    return 1;
  }

  for (let i = 2; i <= index; i++) {
    res = b + a;
    a = b;
    b = res;
    // arr.push(res);
  }
  return res;
}

console.log(fibonacci());
