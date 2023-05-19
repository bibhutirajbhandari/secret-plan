// 4: Write a program that uses a for loop to print a pattern of asterisks based on a given size.
// Sample input: size = 5
// Expected output: 	*
// 			**
// 			***
// 			****
// 			*****

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// console.log(" ");

//          *****
// 			****
// 			***
// 			**
// 			*

// for (let i = 0; i < 5; i++) {
//   for (let j = 4; j >= i; j--) {
//     process.stdout.write("*");
//   }
//   process.stdout.write("\n");
// }

// console.log(" ");

//*****
// ****
//  ***
//   **
//    *

// for (let i = 0; i < 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 4; k >= i; k--) {
//     process.stdout.write("*");
//   }
//   //   process.stdout.write("\n");
//   console.log("");
// }

//    *
//   **
//  ***
// ****
//*****

for (let i = 0; i < 5; i++) {
  for (let j = 4; j > i; j--) {
    process.stdout.write("+");
  }
  for (let k = 0; k <= i; k++) {
    process.stdout.write("*");
  }
  console.log(" ");
}
