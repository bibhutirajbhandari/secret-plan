//9. Palindrome
// Given an integer x, return true if x is a palindrome and false otherwise.

let x = 790;

console.log(palindrome());

function palindrome() {
  let temp = x;
  let rev = "";

  if (temp === 0) {
    return true;
  }

  while (temp > 0) {
    rem = temp % 10;
    rev += rem;
    temp = Math.floor(temp / 10);
  }
  return rev == x ? true : false;
}
