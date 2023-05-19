// 5: Write a program that uses a do-while loop to repeatedly ask a user to enter a number until they enter a negative number, then calculate and display the sum of all the positive numbers entered.
// Sample input: 4 2 3 -1
// Expected output: 9

function sum() {
  let sum = 0;
  let num;
  do {
    num = prompt("enter a number");
    if (num < 0) break;
    sum += parseInt(num);
  } while (true);
  return sum;
}

const res = sum();
prompt(res);
