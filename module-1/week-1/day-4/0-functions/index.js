// Function declaration

doSomething();

function doSomething() {
  // this is a function declaration;
  console.log("I am a function declaration");
}

// myFunction();

// Function declaration
const myFunction = function () {
  // i am a function expression;
  console.log("I am a function expression");
};

// Hoisting

// JavaScript will take your function declarations and "put it at the top"
// of the file so you can access the function declaration eventhough you wrote
// it after.

// const myFatArrowFunction = () => {
//   console.log("I am a fat arrow function");
// };

const myFatArrowFunction = () => console.log("I am a fat arrow function");

myFatArrowFunction();

// const sum = (a, b) => {
//   a + b;
// };

const sum = (a, b) => a + b;

const result = sum(2, 2);
console.log(result);

// const myCat = {
//   name: "Lola",
//   age: 10,
//   purrs: () => {
//     console.log("i am purring");
//     console.log("the object its referring to ", this);
//   },
// };

// myCat.purrs();

// setTimeout(function () {
//   myCat.purrs();
// }, 1000);

function cookMeat(aCallback) {
  console.log("this is the callback", aCallback);

  console.log("I am cooking the meat");
  setTimeout(function () {
    // console.log("anything...");
    aCallback();
  }, 5000);
}

function eat() {
  console.log("I am eating...");
}

// cookMeat();
// eat();
// console.log("On monday");
// A Callback is a function passed as a parameter to another function
// cookMeat(eat); // Passing a reference to the function eat

// execute line 1;
// execute line 2;
// execute line 3;
// execute line 4;

// console.log("On tuesday");
// cookMeat(function () {
//   console.log("Giving the meat to the cat...");
// });

// cookMeat(function () {
//   console.log("Eat with my neighbour");
// });

// cookMeat(() => {
//   console.log("I am eating with the president...");
// });

// Callback v2

// A callback is a function passed as parameter to another function

function parentFunction(cb) {
  console.log(cb);
  cb("FOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");
}

parentFunction(function (value) {
  console.log("I am the call back");
  console.log(value);
});
// parentFunction(2);
