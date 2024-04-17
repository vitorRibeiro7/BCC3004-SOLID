<h1 align="center"> OPEN-CLOSED PRINCIPLE </h1>

<p>The Open/Closed Principle (OCP) states that software entities should be open for extension but closed for modification. This principle encourages you to design systems that can be easily extended with new functionality without modifying existing code. Here’s a simple explanation with an example:</p>

<h2>Explanation</h2>
<p>The Open/Closed Principle (OCP) is one of the SOLID principles of object-oriented design. It states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification. This means that you should be able to add new functionality to a system without changing existing code.</p>

<p>By adhering to the Open/Closed Principle, you can create systems that are more flexible, maintainable, and scalable. This principle encourages you to design your code in a way that allows for easy extension and modification without the need to modify existing code, reducing the risk of introducing bugs and breaking existing functionality.</p>

<h2>Example</h2>
<p>Let’s say we have a class called Shape that represents different geometric shapes. Applying the Open/Closed Principle would mean that the Shape class should be open for extension to add new shapes but closed for modification to existing shapes.</p>

<p><b>Incorrect (Violating Open/Closed Principle):</b></p>

```typescript
class Circle {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square {
  sideLength: number;

  constructor(sideLength: number) {
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength * this.sideLength;
  }
}
```

<p>In the above example, the Circle and Square classes violate the Open/Closed Principle because they are not open for extension. If you wanted to add a new shape, such as a Triangle, you would need to modify the existing classes, which increases the risk of introducing bugs and breaking existing functionality.</p>

<p><b>Correct (Following Open/Closed Principle):</b></p>

```typescript
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
```

<p>
In this improved example, we have an interface called Shape that defines a common method calculateArea(). The Circle, Square, and Triangle classes implement this interface and provide their own implementations of the calculateArea() method. This design allows us to add new shapes by creating new classes that implement the Shape interface, without modifying the existing classes. The code is open for extension but closed for modification, following the Open/Closed Principle.
</p>
