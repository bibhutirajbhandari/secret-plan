//array.entries()

// const arr = ["hello", "i", "am", "bibhuti"];
// const iterator = arr.entries();
// console.log(iterator);

const arraySparse = [1, 3, /* empty */, 7];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
//   numCallbackRuns++;
});

// console.log({ numCallbackRuns });