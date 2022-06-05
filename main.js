document.forms[0].addEventListener('submit', e => {
  e.preventDefault();
  const result = e.target.elements[1];
  const number = +e.target.elements[0].value;

  if(window.Worker) {
    const worker = new Worker('./worker.js');

    worker.postMessage(number);

    worker.onmessage = message => {
      console.log(message);
    };
  }
});