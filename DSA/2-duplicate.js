//2. Find a duplicate number in an array of integers

// const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
// const map = new Map();

// function duplicate() {
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     if (map.has(arr[i])) {
//       count++;
//       console.log(arr[i]);
//       return;
//     }
//     map.set(arr[i], count);
//   }
//   return false;
// }

// duplicate();

/* 5. Find all duplicates

const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
const map = new Map();
let duplicates = [];

function duplicate() {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (map.has(arr[i])) {
      count++;
      duplicates.push(arr[i]);
      continue;
    }
    map.set(arr[i], count);
  }
  return false;
}

duplicate();
console.log(duplicates); */

//6. Remove all duplicates from array
const arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, 6, 10];
const map = new Map();

function duplicate() {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (map.has(arr[i])) {
      count++;
     
      arr.filter((e) => arr)

      continue;
    }
    map.set(arr[i], count);
  }
  return false;
}

duplicate();
