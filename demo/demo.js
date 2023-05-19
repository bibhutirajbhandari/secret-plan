// const XMLHttpRequest = require("xhr2");
// const xhr = new XMLHttpRequest();

// xhr.open("GET", "./text");

// xhr.setRequestHeader("content-type", "/application/text");

// const a = xhr.getResponseHeader("content-type");

// console.log(a);

let i = 0;
while (i < 3) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
    break;
  }
  i++;
}
