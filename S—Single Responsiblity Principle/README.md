<h1 align="center"> SINGLE RESPONSABILITY PRINCIPLE </h1>

<p>The Single Responsibility Principle (SRP) states that a class should have only one primary responsibility. This principle encourages you to keep your classes focused and avoid combining multiple. Here’s a simple explanation with an example:</p>

<h2>Explanation</h2>
<p>The Single Responsibility Principle (SRP) is one of the SOLID principles of object-oriented design. It states that a class should have only one reason to change, meaning that a class should have only one primary responsibility. This principle encourages you to keep your classes focused and avoid combining multiple responsibilities within a single class.</p>

<p>By adhering to the Single Responsibility Principle, you can create classes that are more cohesive, easier to understand, and less likely to require modifications when changes occur. This leads to more maintainable and flexible codebases.</p>

<h2>Example</h2>
<p>Let’s say we have a class called User that represents a users's information. Applying the Single Responsibility Principle would mean that the User class should have only one responsibility, such as storing user details, but it should not handle unrelated tasks like formatting user titles for display.</p>

<p><b>Incorrect (Violating Single Responsibility Principle):</b></p>

```typescript
class User {
  name: string;
  email: string;
  phone: string;
  bornDate: Date;

  constructor(name: string, email: string, phone: string, bornDate: Date) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.bornDate = bornDate;
  }

  displayUserInfo() {
    return `Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
  }

  calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.bornDate.getFullYear();
  }
}
```

<p>In the above example, the User class violates the Single Responsibility Principle because it is responsible for both storing user details and formatting/displaying user information, as well as calculating discounts. If any of these responsibilities change, you'd need to modify the same class.</p>

<p><b>Correct (Following Single Responsibility Principle):</b></p>

```typescript
class User {
  name: string;
  email: string;
  phone: string;
  bornDate: Date;

  constructor(name: string, email: string, phone: string, bornDate: Date) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.bornDate = bornDate;
  }
}

class UserFormatter {
  static displayUserInfo(user: User) {
    return `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`;
  }
}

class AgeCalculator {
  static calculateAge(user: User) {
    const currentYear = new Date().getFullYear();
    return currentYear - user.bornDate.getFullYear();
  }
}

const user = new User(
  "John Doe",
  "johndoe@test.com",
  "123-456-7890",
  new Date(1990, 5, 15)
);

console.log(UserFormatter.displayUserInfo(user));

console.log(AgeCalculator.calculateAge(user));
```

<p>
In this improved example, we have separate classes (UserFormatter and AgeCalculator) that handle the specific responsibilities of formatting user information and calculating discounts. The User class is only responsible for storing user details, following the Single Responsibility Principle. This makes the code easier to understand, maintain, and extend because each class has a single, well-defined purpose.
</p>
