import './style.css'
import singletonLogger from './classes/singletonlogger'
import consoleFactoryLogger from './classes/consolefactorylogger';
import webFactoryLogger from './classes/webfactorylogger';
import prototype from './classes/clonelogger';

function characterSelect() {
  const characterAction = document.querySelectorAll('.action');
  const characterImage = document.getElementById('character-img') as HTMLImageElement;

  characterAction[0].addEventListener('click', () => {
    singletonLogger.log('> Crazy mode activated')
    characterImage.src = 'honored-one.gif';
  })
  characterAction[1].addEventListener('click', () => {
    singletonLogger.log('> Domain Expansion: Infinite Void')
    characterImage.src = 'domain-expansion.gif';
  })
  characterAction[2].addEventListener('click', () => {
    singletonLogger.log('> sheeesh...?')
    characterImage.src = 'fraudjo.jpg';
  })
}



document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.getElementById('submit-factory');
  const inputLogElement = document.getElementById('input-log') as HTMLInputElement;
  const codeInput = document.getElementById('code') as HTMLInputElement;
  const typeInput = document.getElementById('type') as HTMLInputElement;
  const cloneButton = document.getElementById('clone');


  submitButton?.addEventListener('click', () => {
    const message = inputLogElement.value;
    if (message) {
      consoleFactoryLogger.log(message);
      webFactoryLogger.log(message);
    }
    inputLogElement.value = '';
  })

  prototype.log();

  cloneButton?.addEventListener('click', () => {
    const code = codeInput.value;
    const type = typeInput.value;
    const newPrototype = prototype.clone(code, type);
    newPrototype.log()
    codeInput.value = '';
    typeInput.value = '';
  })

  characterSelect();
  singletonLogger.displayLogs();


});

