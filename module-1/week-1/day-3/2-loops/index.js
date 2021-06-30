//  good ol' for loop

// initial value    break condition  increment value

// for (let i = 4; i < 5; i += 3) {
//   //
//   console.log(i);
// }

// WHILE

// let i = 0;
// while (i < 10) {
//   //
//   console.log(i);
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);
//   console.log("if the breaking condition is true, i'll still do a single loop");
//   i++;
// } while (i < 0);

// For...in

const myObject = {
  name: "Foo",
  streetName: "Paname",
  age: 20,
};

// for(let totoefahoiufahfiuaheufieaefihaifuehafuihaehufiae in myObject){
//     console.log(totoefahoiufahfiuaheufieaefihaifuehafuihaehufiae)
// }

// for (let key in myObject) {
//   // console.log(myObject.key)
//   console.log(`The key is :${key} and the value is :${myObject[key]}`);
// }

// const myArray = ["Foo", "Bar", "Baz", "Bob", "Alice"];
//                 0     1       2      3        4
// for (let value of myArray) {
//   console.log(value);
// }

// console.log(myArray[1]);

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// const myName = "Franck";

// for (let value of myName) {
//   console.log(value);
// }

// for (let i = 0; i < myName.length; i++) {
//   // console.log(myName[i]);
//   console.log(myName.charAt(i));
// }

// For Eeach Loop

const myArray = ["Foo", "Bar", "Baz", "Bob", "Alice"];

// myArray.forEach((aVariable) => {
//   console.log(aVariable);
// });

// let sum = 0;

// for (let i = 0; i < 20; i++) {
//   sum = sum + i;
// }

// console.log(sum);

const myName = "Fraaaaaaaaaaaaaaaanck";

console.log(myName[myName.length - 1]);

// let repetitions = 0;

// for (let i = 0; i < myName.length; i++) {
//   if (myName[i] === "a") {
//     repetitions++;
//   }
// }

// console.log(repetitions);
