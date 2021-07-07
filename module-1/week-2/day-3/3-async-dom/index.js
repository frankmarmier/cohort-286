console.log("hello world");

const btnStartGame = document.getElementById("start-game");
const main = document.getElementById("game");

// btnStartGame.onclick = () => {
//   let timer = 3;

//   let intervalId = setInterval(() => {
//     if (timer === 0) {
//       clearInterval(intervalId);
//       main.innerHTML += "<h2>Go !</h2>";
//     }
//     const timerSpan = document.querySelector("#timer span");
//     timerSpan.textContent = timer;
//     timer -= 1;
//   }, 1000);
// };

// function startGame() {
//   let speed = 1000;
//   let limit = 10;
//   let counter = 0;

//   let firstIntervalId = setInterval(() => {
//     counter += 1;

//     if (counter >= limit) {
//       clearInterval(firstIntervalId);
//       counter = 0;

//       let secondIntervalId = setInterval(() => {
//         counter += 1;
//         if (counter >= limit) {
//           clearInterval(secondIntervalId);
//         }
//         console.log("I am in speed mode", speed / 2);
//       }, speed / 2);
//     }

//     console.log("Speed", speed);
//   }, speed);
// }

// startGame();

const initialGameSpeed = 1000;
const limit = 10;

function gameLoop(speed) {
  let count = 0;

  let intervalId = setInterval(() => {
    count++;
    if (count > limit) {
      clearInterval(intervalId);
      gameLoop(speed / 2);
    }

    console.log(speed);
  }, speed);
}

gameLoop(initialGameSpeed);
