// 4: Create a class named Employee with properties name and salary.
// Implement a method getAnnualSalary that returns the annual salary of the
// employee. Create another class named Manager that extends Employee and adds
// a property bonus. Override the getAnnualSalary method in the Manager class to
// include the bonus in the calculation.
// Sample Input:	const employee = new Employee('John', 50000);
// 		const manager = new Manager('Alice', 80000, 10000);
// Expected output:	console.log(employee.getAnnualSalary()); // Output: 60000
// 			console.log(manager.getAnnualSalary()); // Output: 96000

class Employee {
  constructor(name, salary) {
    this.salary = salary;
    this.name = name;
  }

  getAnnualSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  constructor(name, salary, bonus) {
    super(name, salary);
    this.bonus = bonus;
  }

  getAnnualSalary() {
    return this.salary + this.bonus;
  }
}

function main() {
  const employee = new Employee("John", 50000);
  const manager = new Manager("Alice", 80000, 10000);

  console.log(employee.getAnnualSalary());
  console.log(manager.getAnnualSalary());
}

main();
