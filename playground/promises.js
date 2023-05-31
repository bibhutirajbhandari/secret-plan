// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
// });

// console.log("end");

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");
