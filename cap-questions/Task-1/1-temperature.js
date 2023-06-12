//1: Write a program that converts a temperature from Celsius to Fahrenheit.
// Sample Input: tempInCelsius = 20
// Expected Output: 68

function temp(cel = 20) {
  const frah = cel * 1.8 + 32;
  return frah;
}

console.log(`Temperature in Fahrenheit ${temp()}`);
