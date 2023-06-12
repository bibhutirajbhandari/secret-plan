//Q3. How Much is True?
// Create a function which returns the number of true values there are in an array.

function countTrue() {
  let count = 0;
  const arr = [true, false, false, false, true, false];

  arr.forEach((element) => {
    if (element === true) {
      count++;
    }
  });
  return count;
}

console.log("Number of true's in array countTrue: ", countTrue());
