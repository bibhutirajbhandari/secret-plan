//1. Find the missing number in a given integer array of 1 to 100

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

function missing(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i + 1] !== a[i] + 1) {
      return a[i] + 1;
    }
  }
  return false;
}

console.log(missing(arr));
