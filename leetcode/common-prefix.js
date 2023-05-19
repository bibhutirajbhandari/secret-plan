//14. Longest Common Prefix:
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const arr = ["car", "cir"];

console.log(prefix());

function prefix() {
  let str = "";

  if (arr.length < 1) {
    return str;
  }

  //find minimum length
  let min_length = arr[0].length;
  for (let item of arr) {
    if (item.length < min_length) {
      min_length = item.length;
    }
  }

  const tocompare = arr[0]; //compare variable: flower
  const arr1 = arr.filter((e) => e !== arr[0]); //filter out arr to arr1 : [flow,flight]

  for (let i = 0; i < min_length; i++) {
    //for arr[0] item traversal
    let breakCheck = false;
    let flag = 0;
    arr1.forEach((element) => {
      if (element.charAt(i) === tocompare[i]) {
        flag++;
      } else {
        breakCheck = true;
      }
    });

    if (breakCheck) break;
    // arr1.forEach((element) => {
    //   if (element.charAt(i) === tocompare[i]) {
    //     flag++;
    //   } else {
    //     return str;
    //   }
    // });

    if (flag === arr1.length) {
      str += tocompare[i];
    }
  }
  return str;
}
