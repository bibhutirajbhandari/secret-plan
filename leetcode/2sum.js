//1. TWO SUM

// Given an array of integers nums and an integer target, return indices of the two numbers
// such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the
// same element twice.
// You can return the answer in any order.

const nums = [3, 3];
const target = 6;

function twoSum() {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSum());
