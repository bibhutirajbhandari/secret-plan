// Write a function createCounter. It should accept an initial integer init.
//It should return an object with three functions.
// The 3 functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

const init = 5;
const arr = ["increment", "reset", "decrement"];

console.log(createCounter(init));

function createCounter(init) {
  let cnt = init;
  return {
    increment: () => (cnt += 1),
    decrement: () => (cnt -= 1),
    reset: () => (cnt = init),
  };
}
