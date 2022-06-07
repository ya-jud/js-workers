import Worker from './my.worker.js';

const input = document.getElementById('number');
const btn = document.getElementById('fnk');

let result = document.getElementById('result');

const worker = new Worker();

if(window.Worker) {
  
  let test 
  worker.onmessage = e => {
    test = document.createElement("div");
    test.setAttribute("id", "result");

    document.body.append(test);

    test.innerText = JSON.stringify(e.data)
  };

  // worker.postMessage(input);

  // worker.onmessage = message => {
  //   console.log(`Get value from worker: `, message)
  //   result.innerHTML  = message.data
  // }
}

btn.addEventListener('click', () => {
  worker.postMessage({ postMessage: true });
});