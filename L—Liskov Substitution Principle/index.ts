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
