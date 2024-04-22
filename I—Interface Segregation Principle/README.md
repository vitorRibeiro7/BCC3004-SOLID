<h1 align="center"> INTERFACE SEGREGATION PRINCIPLE </h1>

<p>The Interface Segregation Principle (ISP) states that clients should not be forced to depend on interfaces they do not use. This principle encourages you to design your interfaces in a way that allows clients to use only the methods they need, without being forced to implement unnecessary methods. Here’s a simple explanation with an example:</p>

<h2>Explanation</h2>

<p>The Interface Segregation Principle (ISP) is one of the SOLID principles of object-oriented design. It states that clients should not be forced to depend on interfaces they do not use, meaning that interfaces should be specific to the needs of the clients that use them. This principle encourages you to design your interfaces in a way that allows clients to use only the methods they need, without being forced to implement unnecessary methods.</p>

<p>By adhering to the Interface Segregation Principle, you can create more modular, flexible, and maintainable systems. This principle helps you avoid bloated interfaces that contain methods that are not relevant to all clients, reducing the risk of breaking existing implementations when new methods are added to an interface.</p>

<h2>Example</h2>
<p>Let’s say we have an interface called Worker that defines methods for different types of workers. Applying the Interface Segregation Principle would mean that clients, such as Manager and Developer, should only depend on the methods they need, without being forced to implement unnecessary methods.</p>

<p><b>Incorrect (Violating Interface Segregation Principle):</b></p>

```typescript
interface Worker {
  work(): void;
  manageTeam(): void;
  code(): void;
}

class Manager implements Worker {
  work() {
    console.log("Managing the team");
  }

  manageTeam() {
    console.log("Managing the team");
  }

  code() {
    throw new Error("Managers do not code");
  }
}

class Developer implements Worker {
  work() {
    console.log("Writing code");
  }

  manageTeam() {
    throw new Error("Developers do not manage teams");
  }

  code() {
    console.log("Writing code");
  }
}
```

<p>In the above example, the Worker interface violates the Interface Segregation Principle because it contains methods that are not relevant to all clients. The Manager class is forced to implement the code() method, which is not applicable to managers, and the Developer class is forced to implement the manageTeam() method, which is not applicable to developers.</p>

<p><b>Correct (Following Interface Segregation Principle):</b></p>

```typescript
interface Worker {
  work(): void;
}

interface Manager extends Worker {
  manageTeam(): void;
}

interface Developer extends Worker {
  code(): void;
}

class ManagerImpl implements Manager {
  work() {
    console.log("Managing the team");
  }

  manageTeam() {
    console.log("Managing the team");
  }
}

class DeveloperImpl implements Developer {
  work() {
    console.log("Writing code");
  }

  code() {
    console.log("Writing code");
  }
}

const manager = new ManagerImpl();
const developer = new DeveloperImpl();

manager.work();
manager.manageTeam();

developer.work();
developer.code();
```

<p>
In this improved example, we have separate interfaces (Worker, Manager, and Developer) that define specific methods for different types of workers. The ManagerImpl and DeveloperImpl classes implement the corresponding interfaces, allowing clients to use only the methods they need. This design follows the Interface Segregation Principle, ensuring that clients are not forced to depend on interfaces they do not use.
</p>
