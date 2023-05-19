//REPL - Read Execute Print Loop

const repl = require("repl");

const local = repl.start("repl started");

local.on("exit", () => {
  console.log("repl exited");
  process.exit();
});
