class User_r {
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
  static displayUserInfo(user: User_r) {
    return `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone}`;
  }
}

class AgeCalculator {
  static calculateAge(user: User_r) {
    const currentYear = new Date().getFullYear();
    return currentYear - user.bornDate.getFullYear();
  }
}

const user = new User_r(
  "John Doe",
  "johndoe@test.com",
  "123-456-7890",
  new Date(1990, 5, 15)
);

console.log(UserFormatter.displayUserInfo(user));

console.log(AgeCalculator.calculateAge(user));
