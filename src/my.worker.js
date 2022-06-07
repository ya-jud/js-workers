// function fibonacci(number) {
//   if(number < 2) return number;
//   return fibonacci(number - 1) + fibonacci(number - 2);
// };

// this.addEventListener('message', message => {
//   console.log('Get value from main thread', message);
//   const { data } = message
//   this.postMessage(fibonacci(data))
// });

onmessage = e => {
  const workerResult = e.data;
  workerResult.onmessage = true;
  postMessage(workerResult);
};