// In JavaScript code will be executed synchronously

// Async function setTimeout
//  https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

// const x = "a";
// const b = 10;

// let resultB = myFunctionB(function (value) {
//   //   console.log(value);
//   console.log("I am the callback, I have been executed !");
// });
// let resultA = myFunctionA();

// console.log("Result of function A", resultA);
// console.log("Result of function B", resultB);

// function myFunctionA() {
//   return "Hey i am a";
// }

// function myFunctionB(aCallback) {
//   setTimeout(() => {
//     // console.log("I am executed after 1second");
//     aCallback("Foo Bar Baz");
//     // return "Foo Bar Baz !";
//   }, 1000); // Delay in ms

//   //   return "Foo";
// }
// function myFunctionB(aCallback) {
//   setTimeout(() => {
//     aCallback("A string");
//   }, 1000); // Delay in ms
//   //   return "Foo";
// }

// function encounterWithCarlyRayJasmon(aCallback) {
//   const carlyRayJasmon = "06043203232";
//   setTimeout(() => {
//     aCallback(carlyRayJasmon);
//   }, 5000);
// }

// encounterWithCarlyRayJasmon(callingRayJasmon);

// console.log("I am Carly I am Jogging");
// console.log("I am Carly I am eating at 12:00");
// console.log("I am Carly I am taking a nap");

// function callingRayJasmon(herNumber) {
//   console.log("I am calling her ....", herNumber);
// }

// encounterWithCarlyRayJasmon((herNumber) => {
//   console.log(herNumber);
// });
/*


// const section = document.getElementById("section");

// function fiveSecondTimer(cb) {
//   setTimeout(() => {
//     cb();
//   }, 5000);
// }

// fiveSecondTimer(() => {
//   section.innerHTML = "<h2>HELLO MY BRUDDAHS</h2>";
// });

// fiveSecondTimer(() => {
//   section.innerHTML += "<p>I am a paragraph</h2>";
// });


// const btn = document.getElementById("btn");

// btn.onclick = () => {
//   console.log("Clickity click !");
// };
*/
let x = 0;

function increment() {
  let timeoutId = setTimeout(() => {
    if (x > 10) {
      clearTimeout(timeoutId);
      return;
    }
    x++;
    console.log(x);
    increment();
  }, 1000);
}

increment();

// setTimeout(aCallbackFn, delayInMS)

// setTimeout(() => {
//     console.log("Hello world")
// }, 2000)
