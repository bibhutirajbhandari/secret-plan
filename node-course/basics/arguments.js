const minimist = require("minimist");

// const newArgv = mini(process.argv.slice(2));
// console.log(newArgv.name);

const newArgv = minimist(process.argv.slice(2));
console.log(newArgv.name);
