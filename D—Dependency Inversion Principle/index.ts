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
