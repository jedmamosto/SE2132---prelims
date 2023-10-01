import ObjectLogger from "../interface/objectlogger";
import ObjectLoggerFactory from "./abstractclassfactory";

class WebLogger implements ObjectLogger {
  log(message: string | undefined): void {
    const webLogElement = document.createElement('p');

    if (message) {
      webLogElement.innerText = message;
      const webLogContainer = document.getElementById('weblogs');

      if (webLogContainer) {
        webLogContainer.appendChild(webLogElement);
      }
    }
  }
}

class WebLoggerFactory extends ObjectLoggerFactory {
  createLogger(): ObjectLogger {
    return new WebLogger();
  }
}

const webLoggerFactory = new WebLoggerFactory();
const webFactoryLogger = webLoggerFactory.createLogger();

export default webFactoryLogger;
