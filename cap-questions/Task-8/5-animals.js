// 5: Create a class hierarchy representing a zoo. Start with an abstract class Animal
//  and create subclasses such as Lion, Elephant, and Giraffe. Implement appropriate methods
//  and properties for each animal. Finally, create an array of animals in the zoo and
//  iterate over them to display information about each animal.
// Sample Input:	const animals = [
//  				new Lion('Simba', 3),
//   				new Elephant('Dumbo', 10),
//   				new Giraffe('Melman', 5)
// 				];
// Expected Output:	animals.forEach(animal => console.log(animal.getInfo()));
// Output:
// "Lion: Simba, Age: 3"
// "Elephant: Dumbo, Age: 10"
// "Giraffe: Melman, Age: 5"

class Animal {}

class Lion extends Animal {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `Lion: ${this.name}, Age: ${this.age}`;
  }
}

class Elephant extends Animal {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `Elephant: ${this.name}, Age: ${this.age}`;
  }
}

class Giraffe extends Animal {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `Giraffe: ${this.name}, Age: ${this.age}`;
  }
}

function main() {
  //   const lion = new Lion("Simba", 3);
  //   const ele = new Elephant("Dumbo", 10);
  //   const giraffe = new Giraffe("Melman", 5);

  //   lion.getInfo();
  //   ele.getInfo();
  //   giraffe.getInfo();
  const animals = [
    new Lion("Simba", 3),
    new Elephant("Dumbo", 10),
    new Giraffe("Melman", 5),
  ];

  animals.forEach((animal) => console.log(animal.getInfo()));
}

main();
