//1: Write a program that converts a temperature from Celsius to Fahrenheit.
// Sample Input: tempInCelsius = 20
// Expected Output: 68

const celsius = 20;

function temp(cel) {
  const frah = cel * 1.8 + 32;
  return frah;
}

const res = temp(celsius);
console.log(`Temperature in Fahrenheit ${res}`);
