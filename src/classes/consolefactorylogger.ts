import ObjectLogger from "../interface/objectlogger";
import ObjectLoggerFactory from "./abstractclassfactory";

class ConsoleLogger implements ObjectLogger {
  log(message: string | undefined): void {

    console.log(`Console: ${message}`);
  }
}

class ConsoleLoggerFactory extends ObjectLoggerFactory {
  createLogger(): ObjectLogger {
    return new ConsoleLogger();
  }
}


const consoleLoggerFactory = new ConsoleLoggerFactory();
const consoleFactoryLogger = consoleLoggerFactory.createLogger();

export default consoleFactoryLogger;
