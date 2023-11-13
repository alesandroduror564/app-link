/*
  File: complexCode.js
  Description: Complex JavaScript code demonstrating various programming concepts
*/

// Define a class called Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Define a class called Employee which extends Person
class Employee extends Person {
  constructor(name, age, company, salary) {
    super(name, age);
    this.company = company;
    this.salary = salary;
  }

  // Method to display employee details
  displayDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Company: ${this.company}`);
    console.log(`Salary: ${this.salary}`);
  }
}

// Create instances of Person class
const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Smith", 30);

// Create instances of Employee class
const employee1 = new Employee("Alice Johnson", 35, "ABC Corp", 50000);
const employee2 = new Employee("Bob Williams", 40, "XYZ Inc", 60000);

// Call greet method for each person
person1.greet();
person2.greet();

// Call displayDetails method for each employee
employee1.displayDetails();
employee2.displayDetails();

// Define a function to calculate the sum of two numbers
function sum(a, b) {
  return a + b;
}

// Call the sum function
const result = sum(10, 5);
console.log("Sum:", result);

// Define an IIFE (Immediately Invoked Function Expression)
const iife = (function() {
  let counter = 0;

  return function() {
    return ++counter;
  };
})();

// Call the IIFE multiple times
console.log("Counter:", iife());
console.log("Counter:", iife());
console.log("Counter:", iife());

// Define a function with a callback
function fetchData(callback) {
  setTimeout(() => {
    const data = "Some data retrieved from an API";
    callback(data);
  }, 2000);
}

// Call the fetchData function with a callback
fetchData((data) => {
  console.log("Data Received:", data);
});

// Define a Promise that resolves after a delay
const delayPromise = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

// Use the delayPromise to introduce delays between console.logs
delayPromise(1000)
  .then(() => console.log("Delayed Log 1"))
  .then(() => delayPromise(500))
  .then(() => console.log("Delayed Log 2"))
  .then(() => delayPromise(200))
  .then(() => console.log("Delayed Log 3"))
  .then(() => delayPromise(100))
  .then(() => console.log("Delayed Log 4"));

// Define a generator function to generate a sequence
function* sequenceGenerator(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Use the sequenceGenerator to print numbers from 1 to 5
const sequence = sequenceGenerator(1, 5);
for (const num of sequence) {
  console.log("Number:", num);
}

// Define a class with static methods
class MathOperations {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// Call the static methods of MathOperations class
console.log("Addition:", MathOperations.add(5, 3));
console.log("Multiplication:", MathOperations.multiply(4, 2));

// Define a module using the Module Revealing Pattern
const calculator = (function() {
  let total = 0;

  function add(num) {
    total += num;
  }

  function subtract(num) {
    total -= num;
  }

  function reset() {
    total = 0;
  }

  function getTotal() {
    return total;
  }

  return {
    add,
    subtract,
    reset,
    getTotal
  };
})();

// Use the calculator module
calculator.add(5);
calculator.subtract(2);
console.log("Total:", calculator.getTotal());
calculator.reset();
console.log("Total after reset:", calculator.getTotal());

// Define a class using a mixin for reusable methods
class Shape {
  // Common methods for all shapes
  calculateArea() {
    console.log("Calculating area...");
  }
}

// Circle class using Shape mixin
class Circle extends Shape {
  // Circle-specific methods
  calculateCircumference() {
    console.log("Calculating circumference...");
  }
}

// Rectangle class using Shape mixin
class Rectangle extends Shape {
  // Rectangle-specific methods
  calculatePerimeter() {
    console.log("Calculating perimeter...");
  }
}

// Create instances and call methods
const circle = new Circle();
circle.calculateArea();
circle.calculateCircumference();

const rectangle = new Rectangle();
rectangle.calculateArea();
rectangle.calculatePerimeter();

// ... (Continue with more complex code)