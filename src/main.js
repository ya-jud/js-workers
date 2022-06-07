import Worker from './my.worker.js';

const worker = new Worker();

document.forms[0].addEventListener('submit', e => {
  e.preventDefault();
  const number = +e.target.elements[0].value;
  
  worker.postMessage(number)

  worker.onmessage = message => {
    console.log(message);
  };
});