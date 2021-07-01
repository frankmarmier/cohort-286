const myArray = []; // initializing an array (empty)

const devSquad = ["Quentin", "Jinjoo", "Zsolt", "Florian", "Johanna"];

// Arrays start at index 0;

// console.log(devSquad[3]);
// console.log(devSquad[0]);
// console.log(devSquad[10]);

console.log(devSquad.length);

// console.log(devSquad[devSquad.length - 1]);

for (let i = 0; i < devSquad.length; i++) {
  //   console.log(devSquad[i]);
}

console.log(devSquad);
devSquad.push("Bob");
console.log(devSquad);

devSquad.pop(); // Removes the last element of the array
console.log(devSquad);

devSquad.shift(); // Removes the first element of the array
console.log(devSquad);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
devSquad.splice(2, 1); // Removes one or more element at a specific index
console.log(devSquad);

const anotherArray = ["A string", 2, { name: "Lola" }, ["Bob"], false, null];

// for (let element of anotherArray) {
//   console.log("element =>", element);
// }
// console.log("DevSquad before", devSquad);

const result = anotherArray.forEach(function (element, index, array) {
  console.log(element);
  //   devSquad.splice(1, 1);
});

console.log("devSquad", devSquad);

console.log("the result is ==> ", result);

/**
 *
 * @param {*} aCallbackFn this callback function will be provided 2 arguments, one that is "toto" and the 2nd will be the index
 *
 */
function myFunction(aCallbackFn) {
  let x = 10;

  //   aCallbackFn("any value");

  for (let i = 0; i < 20; i++) {
    aCallbackFn("toto", i);
  }
}

myFunction(function (aParameter, theIndex) {
  console.log(aParameter, theIndex);
});

// myFunction(function (ouahfauoehfa, fjaoifaeijfaijfaiofa) {
//   console.log(ouahfauoehfa, fjaoifaeijfaijfaiofa);
// });

// function myCallbackFunction(aParameter) {
//   console.log(aParameter);
// }

// myFunction(myCallbackFunction);
