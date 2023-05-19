// 2: Write a program that generates a random number between 1 and 100 and asks the user to guess it. If the user's guess is higher than the number, the program should print "Too high!" If the user's guess is lower than the number, the program should print "Too low!" If the user guesses the number correctly, the program should print "You got it!" and exit.
// Sample Input:
// Expected Output: 	Guess a number between 1 and 100: 50
// 			Too high!
// 			Guess a number between 1 and 100: 30
// 			Too low!
// 			Guess a number between 1 and 100: 40
// 			You got it!

const target = Math.random() * 100; //random num between 0 to 100

function guess(target) {
  let flag = false;

  while (flag === false) {
    let num = prompt("guess the number");

    if (num > target) {
      console.log("Too high!");
    } else if (num < target) {
      console.log("Too low!");
    } else {
      console.log("You got it!");
      flag = true;
      break;
    }
  }
}
guess(78);

/* call recursively 

function guess(target) {
      let num = prompt("guess the number");
  
      if (num > target) 
        console.log("Too high!");
        guess(target);
      } else if (num < target) {
        console.log("Too low!");
        guess(target);
      } else {
        console.log("You got it!");
        flag = true;
    }
  } */
