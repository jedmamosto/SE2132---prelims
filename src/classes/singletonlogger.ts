class SingletonLogger {
  private static instance: SingletonLogger;
  private logs: string[] = [];

  static getInstance(): SingletonLogger {
    if (!SingletonLogger.instance) {
      SingletonLogger.instance = new SingletonLogger();
    }
    return SingletonLogger.instance;
  }

  log(content: string) {
    const contentElement = document.createElement('p');
    contentElement.innerText = content;
    const messageContainer = document.getElementById('message-container');
    if (messageContainer) {
      messageContainer.appendChild(contentElement);
    }
    this.logs.push(content);
  }

  displayLogs() {
    const displayElement = document.getElementById('display');
    if (displayElement) {
      displayElement?.addEventListener('click', () => {
        for (const log of this.logs) {
          console.log(log);
        }
      })
    }
  }
}

const singletonLogger = SingletonLogger.getInstance();

export default singletonLogger;