// console.log("Hello world");

//  Scope

// if (true) {
//   // Block scope
// }

// for (let something of somethingElse) {
//   // Block scope
// }

// function something() {
//   // You are in a scope !
// }

// const fatArrow = () => {
//   // You are in a scope
// };

// You are in a scope global scope, when you are working
// on a browser the global scope is called window

// var myVariable = 10;
// let aVariableDeclaredWithLet = "I am let!";
// function myFunction() {
//   console.log(myVariable);
//   console.log(aVariableDeclaredWithLet);
//   // Function scope
//   //   var oneVariable = "A variable inside a function";
//   let oneVariable = "A variable inside a function";
//   //   return onvolumechange;
// }

// myFunction();

// // console.log(oneVariable);
// // console.log(oneVariable);

// if (true) {
//   var name = "I am john";
//   let nameWithLet = "I am Sophie";
// }

// console.log(name);
// // console.log(nameWithLet);

// var age = 10;

// if (true) {
//   var age = 20;
//   console.log(age);
// }

// something = "30";
// let z = "I am on the global object ";
// console.log(something);
// console.log(age);

// console.log(window);

/**
 * Shadowing
 */

// let variableX = 10;

// function anotherFunction(variableX) {
//   console.log(variableX);
// }

// if (true) {
//   let variableX = "Foo bar baz";
//   console.log(variableX);
// }

// anotherFunction([]);

let x = "Another One";

function shadowing() {
  let outerVariable = 10;

  let result = "I am a result";

  function innerFunction() {
    console.log(outerVariable);
    console.log(result);
    console.log("I am x", x);
  }

  innerFunction("Heyyyyyyyy");
}

shadowing("Whatsup people ?");
