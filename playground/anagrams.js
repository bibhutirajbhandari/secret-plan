const first = "mary";
const second = "army";

function isAnagarm() {
  let a = first.toLowerCase();
  let b = second.toLowerCase();

  a = a.split("").sort().join("");
  b = b.split("").sort().join("");

  return a === b;
}

console.log(isAnagarm());
