<h1 align="center"> SOLID PRINCIPLES - BCC3004 </h1>

<h2>Introduction</h2>
<p>The SOLID principles are a set of software design principles that encourage developers to create more understandable, flexible, and maintainable systems. These principles are widely recognized in the software development community and are a cornerstone of good object-oriented design. This repository aims to provide a comprehensive overview of the SOLID principles, including their context, benefits, drawbacks, and separate explanations for each principle.</p>

<h2>General Context</h2>
<p>The SOLID principles were introduced by Robert C. Martin, also known as Uncle Bob, in his book "Clean Code: A Handbook of Agile Software Craftsmanship". The principles are:

<ul>
  <li><b>Single Responsibility Principle (SRP):</b> A class should have only one reason to change.</li>
  <li><b>Open/Closed Principle (OCP):</b> Software entities should be open for extension but closed for modification.</li>
  <li><b>Liskov Substitution Principle (LSP):</b> Subtypes must be substitutable for their base types.</li>
  <li><b>Interface Segregation Principle (ISP):</b> Clients should not be forced to depend on interfaces they do not use.</li>
  <li><b>Dependency Inversion Principle (DIP):</b> High-level modules should not depend on low-level modules. Both should depend on abstractions.</li>
</ul>

<h2>Links to Separate Explanations</h2>
<ul>
  <li><a href="./S—Single Responsiblity Principle/README.md">Single Responsibility Principle (SRP)</a></li>
    <li><a href="./O—Open-Closed Principle/README.md">Open/Closed Principle (OCP)</a></li>
    <li><a href="./L—Liskov Substitution Principle/README.md">Liskov Substitution Principle (LSP)</a></li>
    <li><a href="./I—Interface Segregation Principle/README.md">Interface Segregation Principle (ISP)</a></li>
    <li><a href="./D—Dependency Inversion Principle/README.md">Dependency Inversion Principle (DIP)</a></li>
</ul>

<h2>Benefits and Drawbacks</h2>
<h3>Pros and Cons of Using SOLID Principles</h3>
<h4>Pros</h4>
<ul>
  <li>Improved Code Quality: SOLID principles lead to more readable, maintainable, and flexible code.</li>
  <li>Easier Refactoring: Changes are easier to make because the code is more modular.</li>
  <li>Reduced Risk of Bugs: The design is more predictable, reducing the risk of introducing bugs.</li>
  <li>Better Communication: SOLID principles provide a common language for developers to discuss and understand the design.</li>
</ul>

<h4>Cons</h4>
<ul>
  <li>Overhead: Implementing SOLID principles can sometimes lead to over-engineering, especially in simple projects.</li>
  <li>Learning Curve: Understanding and applying SOLID principles requires a good grasp of object-oriented programming concepts.</li>
  <li>Potential for Over-Abstraction: There's a risk of creating overly abstract designs that are hard to understand and maintain.</li>
</ul>

<h2>Conclusion</h2>
<p>The SOLID principles are a powerful tool for software developers, offering a framework for creating systems that are easy to understand, maintain, and extend. While there are potential drawbacks, such as the risk of over-engineering or over-abstraction, the benefits of using SOLID principles in software design are significant. By adhering to these principles, developers can create systems that are robust, flexible, and capable of withstanding the test of time.</p>

<p>This repository serves as a resource for understanding and applying the SOLID principles in your projects. Whether you're a seasoned developer or just starting your journey in software development, these principles can guide you towards writing better, more maintainable code.</p>

<h2>Run the codes!</h2>
<p>Each principle has its own folder with code examples in TypeScript. You can run the code by following these steps:</p>

```bash
# Clone the repository
 $ git clone

# Navigate to some principle folder (e.g., Single Responsibility Principle)
 $ cd S—Single\ Responsibility\ Principle

# Install dependencies
 $ yarn

# Run the code
 $ yarn dev

# Repeat the same steps for other principles
 $ cd ../O—Open-Closed\ Principle
 $ cd ../L—Liskov\ Substitution\ Principle
 $ cd ../I—Interface\ Segregation\ Principle
 $ cd ../D—Dependency\ Inversion\ Principle
```
