// setInterval(() => {
//   console.log("I am here every 1second");
// }, 1000); // Time in ms

// setInterval(printTime, 1000);

// function printTime() {
//   console.log(new Date());
// }

let counter = 3;

let intervalId = setInterval(() => {
  console.log(counter);

  if (counter === 0) {
    clearInterval(intervalId);
    console.log("Go !");
    return;
  }

  counter -= 1;
}, 1000);
