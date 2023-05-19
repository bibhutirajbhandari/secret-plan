// 6: Write a program that takes a list of numbers as input and returns a new list that contains only the even numbers from the original list.
// Sample Input: numbers = [10, 5, 20, 15]
// Expected Output: [10, 20]

const num = [10, 5, 20, 15];
let evenarr = [];

num.forEach((e) => {
  even(e);
});
console.log(evenarr);

function even(element) {
  if (element % 2 == 0) {
    evenarr.push(element);
  }
  return;
}
