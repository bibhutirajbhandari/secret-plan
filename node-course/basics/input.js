// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("what is your name?", (name) => {
//   console.log(`my name is ${name}`);
//   rl.close();
// });

const prompt = require("prompt-sync")(); // prompt-sync is a function,so () funcion diyeko yaha

const name = prompt("what is yr name?");
console.log(`hi ${name}`);
