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
  onmessage!: () => void;
  onmessageerror!: () => void;
  postMessage!: () => void;
  terminate!: () => void;
  addEventListener!: () => void;
  removeEventListener!: () => void;
  dispatchEvent!: () => boolean;
  onerror!: () => void;

  work() {
    console.log("Managing team");
  }

  manageTeam() {
    console.log("Managing team");
  }
}

class DeveloperImpl implements Developer {
  onmessage!: () => void;
  onmessageerror!: () => void;
  postMessage!: () => void;
  terminate!: () => void;
  addEventListener!: () => void;
  removeEventListener!: () => void;
  dispatchEvent!: () => boolean;
  onerror!: () => void;

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
