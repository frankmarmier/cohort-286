// Conditionals

// if...else

// if (true) {
//   console.log("I am in the true block");
// } else {
//   console.log("You are in the false block");
// }

// if (false) {
//   console.log("I am in the true block");
// } else if (false) {
//   console.log("I am in the next truthy block");
// } else if (false) {
//   console.log("i am in the second truthy block");
// } else {
//   console.log("No conditions have been met above i am in this block");
// }

// let myValue = 0;
// let myValue = "I am a string";
// let myValue = "";
// let myValue = [];
// let myValue = {};

// if (myValue.length === 0) {
//   console.log("I am truthy");
// } else {
//   console.log("I am falsy");
// }

// if (myValue.length >= 0) {
//   console.log("I am truthy");
// } else {
//   console.log("I am falsy");
// }

// SWITCH

// const myValue = "";

// switch (myValue) {
//   case "bar":
//     console.log("I am in the bar case !");
//     break;
//   case "baz":
//     console.log("I am in the baz case !");
//     break;

//   case "foo":
//     console.log("I am in the foo case !");
//     break;

//   default:
//     console.log("There are no cases met !");
// }

// Ternary

// When its true its the expression on the left side of the ":" otherwise its on the right side

// const result = true ? "I am truthy" : "I am falsy !";
// const result = false ? "I am truthy" : "I am falsy !";
// const result = 10 > 5 ? "I am truthy" : "I am falsy !";
// const result = null ? "I am truthy" : "I am falsy !";
// const result = undefined ? "I am truthy" : "I am falsy !";
// const result = 0 ? "I am truthy" : "I am falsy !";
// const result = "" ? "I am truthy" : "I am falsy !";

// console.log(result);

// NESTED CONDITIONS WITH TERNARY

const result = false
  ? "First case"
  : false
  ? "In the second case"
  : false
  ? "Last case"
  : "default case";

// console.log(result);
