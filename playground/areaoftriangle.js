//Q. WAP to find the area of a triangle where three sides are 5, 6, 7.

const a = 7;
const b = 5;
const c = 6;

const s = (a + b + c) / 2;
const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

console.log(area);
