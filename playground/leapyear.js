const year = "2004";

function isLeap(year) {
  return year % 4 == 0 ? true : false;
}

console.log(isLeap(year));
