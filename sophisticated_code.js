/* 
 * Filename: sophisticated_code.js
 * Description: A complex JavaScript code that demonstrates various advanced concepts.
 */ 

// Create a class for creating custom shapes
class Shape {
  constructor(color) {
    this.color = color;
  }

  // Method to get the color of the shape
  getColor() {
    return this.color;
  }

  // Abstract method to calculate the area of the shape
  calculateArea() {
    throw new Error('calculateArea() method must be implemented');
  }
}

// Create a class for creating rectangles
class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  // Override the calculateArea() method for rectangles
  calculateArea() {
    return this.width * this.height;
  }
}

// Create a class for creating circles
class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  // Override the calculateArea() method for circles
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Create an instance of Rectangle
const rectangle = new Rectangle('blue', 10, 5);

// Create an instance of Circle
const circle = new Circle('red', 7);

// Output the color and area of the shapes
console.log(`Rectangle color: ${rectangle.getColor()}`);
console.log(`Rectangle area: ${rectangle.calculateArea()}`);
console.log(`Circle color: ${circle.getColor()}`);
console.log(`Circle area: ${circle.calculateArea()}`);

// Create an array of shapes
const shapes = [rectangle, circle];

// Iterate over the shapes array and output their areas
shapes.forEach((shape, index) => {
  console.log(`Shape ${index + 1} area: ${shape.calculateArea()}`);
});

// Create a function to calculate the total area of all shapes
function calculateTotalArea(shapesArray) {
  let totalArea = 0;

  for (const shape of shapesArray) {
    totalArea += shape.calculateArea();
  }

  return totalArea;
}

// Output the total area of all shapes
console.log(`Total area of all shapes: ${calculateTotalArea(shapes)}`);