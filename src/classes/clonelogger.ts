class prototypeLogger {
  private code: string = '';
  private type: string = '';

  constructor(code: string, type: string) {
    this.code = code;
    this.type = type;
  }
  log() {
    console.log(`[${this.code}] [${this.type}] Model`);
    const cloneLogElement = document.createElement('p');
    cloneLogElement.innerText = `[${this.code}] [${this.type}] Model`;
    const cloneLogContainer = document.getElementById('clonelogs');

    if (cloneLogContainer) {
      cloneLogContainer.appendChild(cloneLogElement);
    }
  }

  clone(code: string, type: string): prototypeLogger {
    return new prototypeLogger(code, type);
  }
}

const prototype = new prototypeLogger('01', 'base');

export default prototype;