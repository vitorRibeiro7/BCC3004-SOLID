<h1 align="center"> DEPENDENCY INVERSION PRINCIPLE </h1>

<p>The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules. Both should depend on abstractions. This principle encourages you to design your systems in a way that allows for flexibility, extensibility, and testability by decoupling high-level and low-level modules. Here’s a simple explanation with an example:</p>

<h2>Explanation</h2>
<p>The Dependency Inversion Principle (DIP) is one of the SOLID principles of object-oriented design. It states that high-level modules should not depend on low-level modules. Both should depend on abstractions, meaning that classes should depend on interfaces or abstract classes rather than concrete implementations.</p>

<p>By adhering to the Dependency Inversion Principle, you can create systems that are more flexible, maintainable, and testable. This principle helps you decouple high-level and low-level modules, allowing you to easily replace or extend components without affecting the rest of the system.</p>

<h2>Example</h2>

<p>Let’s say we have a class called NotificationService that sends notifications to users. Applying the Dependency Inversion Principle would mean that the NotificationService class should depend on an abstraction, such as an interface, rather than a concrete implementation of the notification mechanism.</p>

<p><b>Incorrect (Violating Dependency Inversion Principle):</b></p>

```typescript
class EmailService {
  sendEmail(user: string, message: string) {
    console.log(`Sending email to ${user}: ${message}`);
  }
}

class NotificationService {
  emailService: EmailService;

  constructor() {
    this.emailService = new EmailService();
  }

  sendNotification(user: string, message: string) {
    this.emailService.sendEmail(user, message);
  }
}
```

<p>In the above example, the NotificationService class violates the Dependency Inversion Principle because it directly depends on the concrete EmailService class. If you wanted to change the notification mechanism from email to SMS, you would need to modify the NotificationService class, which increases the risk of introducing bugs and breaking existing functionality.</p>

<p><b>Correct (Following Dependency Inversion Principle):</b></p>

```typescript
interface NotificationService {
  sendNotification(user: string, message: string): void;
}

class EmailService implements NotificationService {
  sendNotification(user: string, message: string) {
    console.log(`Sending email to ${user}: ${message}`);
  }
}

class SMSService implements NotificationService {
  sendNotification(user: string, message: string) {
    console.log(`Sending SMS to ${user}: ${message}`);
  }
}

class NotificationClient {
  notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  sendNotification(user: string, message: string) {
    this.notificationService.sendNotification(user, message);
  }
}

const emailService = new EmailService();
const smsService = new SMSService();

const emailClient = new NotificationClient(emailService);
const smsClient = new NotificationClient(smsService);

emailClient.sendNotification("Alice", "You have a new email");
smsClient.sendNotification("Bob", "You have a new message");
```

<p>
In this improved example, we have an interface called NotificationService that defines a common method sendNotification(). The EmailService and SMSService classes implement this interface and provide their own implementations of the sendNotification() method. The NotificationClient class depends on the NotificationService interface, allowing you to easily switch between email and SMS notification mechanisms without modifying the client code, following the Dependency Inversion Principle.
</p>
