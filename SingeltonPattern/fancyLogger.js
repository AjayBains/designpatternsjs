// export default class FancyLogger {
//   constructor() {
//     this.logs = [];
//   }
//   log(message) {
//     this.logs.push(message);
//     console.log(message);
//   }
//   printLogCount() {
//     console.log(`Log count: ${this.logs.length}`);
//   }

// }

class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      this.logs = [];
      FancyLogger.instance = this;
    }
    return FancyLogger.instance;
  }
  log(message) {
    this.logs.push(message);
    console.log(message);
  }
  printLogCount() {
    console.log(`Log count: ${this.logs.length}`);
  }
}

const logger = new FancyLogger();
Object.freeze(logger);
export default logger;