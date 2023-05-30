// 1: Create a class named Circle with a property radius. Implement a method getArea that returns the area of the circle,
//  and a method getCircumference that returns the circumference of the circle.
// Sample Input:const circle = new Circle(3);
// Expected output: console.log(circle.getArea()); // Output: 28.274333882308138
// 			     console.log(circle.getCircumference()); // Output: 18.84955592153876

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    console.log(3.14 * Math.pow(this.radius, 2));
  }
  getCircumference() {
    console.log(2 * 3.14 * this.radius);
  }
}

function shape() {
  mycircle = new Circle(3);
  mycircle.getArea();
  mycircle.getCircumference();
}

shape();
