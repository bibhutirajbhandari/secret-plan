const arr = [1, 2, 3, 4, 100];

function maxmin() {
  let max = arr[0];
  let min = arr[1];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return {
    max: max,
    min: min,
  };
}

console.log(maxmin());
