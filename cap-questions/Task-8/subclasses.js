// 3: Create a class named Shape with an abstract method calculateArea. Create two subclasses, Rectangle and Circle,
//that extend Shape and implement the calculateArea method accordingly. Finally, create an array of shapes,
// including both rectangles and circles, and calculate the total area of all shapes.
// Sample Input:	const shapes = [
//   				new Rectangle(4, 5),
//   				new Circle(3),
//   				new Rectangle(2, 3)
// 				];
// Expected Output: console.log(calculateTotalArea(shapes)); // Output: 65.27433388230814

class Shape {
  calculateArea() {}
}

class Rectangle extends Shape {
  constructor(l, b) {
    super();
    this.l = l;
    this.b = b;
  }
  calculateArea() {
    return this.l * this.b;
  }
}

class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  calculateArea() {
    return Math.PI * Math.pow(this.r, 2);
  }
}

function calculateTotalArea() {
  let sum = 0;

  const shapes = [new Rectangle(4, 5), new Circle(3), new Rectangle(2, 3)];

  shapes.forEach((shape) => {
    sum += shape.calculateArea();
  });

  return sum;
}

console.log(calculateTotalArea());
