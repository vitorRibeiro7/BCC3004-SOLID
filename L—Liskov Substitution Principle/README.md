<h1 align="center"> LISKOV SUBSTITUTION PRINCIPLE </h1>

<p>The Liskov Substitution Principle (LSP) states that subtypes must be substitutable for their base types. This principle encourages you to design your classes in a way that allows objects of derived classes to be used in place of objects of the base class without affecting the correctness of the program. Here’s a simple explanation with an example:</p>

<h2>Explanation</h2>
<p>The Liskov Substitution Principle (LSP) is one of the SOLID principles of object-oriented design. It states that subtypes must be substitutable for their base types, meaning that objects of derived classes should be able to replace objects of the base class without affecting the correctness of the program.</p>

<p>By adhering to the Liskov Substitution Principle, you can create class hierarchies that are more flexible, reusable, and maintainable. This principle encourages you to design your classes in a way that allows derived classes to extend or override the behavior of the base class without breaking the program's functionality.</p>

<h2>Example</h2>
<p>Let’s say we have a class hierarchy representing different types of employees. Applying the Liskov Substitution Principle would mean that objects of derived classes, such as Manager and Developer, should be able to replace objects of the base class, Employee, without affecting the correctness of the program.</p>

<p><b>Incorrect (Violating Liskov Substitution Principle):</b></p>

```typescript
class Employee {
  name: string;
  role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}

class Manager extends Employee {
  teamSize: number;

  constructor(name: string, teamSize: number) {
    super(name, "Manager");
    this.teamSize = teamSize;
  }

  getRole() {
    return "Manager";
  }
}

class Developer extends Employee {
  programmingLanguage: string;

  constructor(name: string, programmingLanguage: string) {
    super(name, "Developer");
    this.programmingLanguage = programmingLanguage;
  }

  getRole() {
    return "Developer";
  }
}
```

<p>In the above example, the Manager and Developer classes violate the Liskov Substitution Principle because they override the getRole() method to return a fixed value, which is not substitutable for the base class's behavior. If you replace an Employee object with a Manager or Developer object, the behavior of the program changes, violating the Liskov Substitution Principle.</p>

<p><b>Correct (Following Liskov Substitution Principle):</b></p>

```typescript
class Employee {
  name: string;
  role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }

  getRole() {
    return this.role;
  }
}

class Manager extends Employee {
  teamSize: number;

  constructor(name: string, teamSize: number) {
    super(name, "Manager");
    this.teamSize = teamSize;
  }
}

class Developer extends Employee {
  programmingLanguage: string;

  constructor(name: string, programmingLanguage: string) {
    super(name, "Developer");
    this.programmingLanguage = programmingLanguage;
  }
}

function printEmployeeRole(employee: Employee) {
  console.log(`${employee.name} is a ${employee.getRole()}`);
}

const manager = new Manager("Alice", 5);
const developer = new Developer("Bob", "JavaScript");

printEmployeeRole(manager);
printEmployeeRole(developer);
```

<p>
In this improved example, the Manager and Developer classes inherit the getRole() method from the base class Employee, which returns the role of the employee. The printEmployeeRole() function accepts an Employee object as a parameter and calls the getRole() method to print the employee's role. This design allows objects of derived classes to be used in place of objects of the base class without affecting the correctness of the program, following the Liskov Substitution Principle.
</p>
