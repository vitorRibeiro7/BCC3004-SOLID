interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square implements Shape {
  sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength * this.sideLength;
  }
}

class Triangle implements Shape {
  base: number;
  height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

const circle = new Circle(5);
const square = new Square(5);
const triangle = new Triangle(5, 3);

console.log(circle.calculateArea());
console.log(square.calculateArea());
console.log(triangle.calculateArea());
