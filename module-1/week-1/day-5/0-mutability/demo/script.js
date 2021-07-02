// All primitive types are copied by value

let a = 1;
let b = a;

b = 10;

console.log(b);
console.log(a);

// All non primite types (objects)

// let person = {
//   name: "John",
//   age: 10,
// };

// let secondPerson = person;

// secondPerson.name = "Foo";

// console.log("Person =>>>", person);
// console.log("Second person =>>>", secondPerson);

// const classroom = ["John", "Bob", "Alice"];

// const newClassrom = classroom;

// newClassrom.pop();

// console.log("Classroom =>>", classroom);
// console.log("New Classroom =>>", newClassrom);

/**
 * Making a shallow copy
 */

// Shallow copies of an object

// const person = {
//   name: "John",
//   age: 10,
// };

// Shallow Copy | Copying with Spread operator

// const secondPerson = { ...person }; // Copying using the spread operator

// secondPerson.name = "Baaaaaar";

// console.log("Person =>>>", person);
// console.log("Second person =>>>", secondPerson);

// Shallow Copy | Copying with Object.assign

// const secondPerson = Object.assign({}, person);

// secondPerson.name = "Toto";

// console.log("Person =>>>", person);
// console.log("Second person =>>>", secondPerson);

// const classroom = ["John", "Bob", "Alice"];

// Shallow Copy | Copying with spread operator on an array

// const newClassroom = [...classroom];

// newClassroom.pop();

// console.log("Classroom =>>>", classroom);
// console.log("New classroom =>>>", newClassroom);

// Shallow Copy | Using Array.from()

// const newClassroom = Array.from(classroom);

// newClassroom.pop();

// console.log("Classroom =>>>", classroom);
// console.log("New classroom =>>>", newClassroom);

// Issues of a shallow copy !

const person = {
  name: "John",
  age: 10,
  address: {
    number: 10,
    name: "Somewhere overthere",
  },
};

// const secondPerson = { ...person };

// secondPerson.address.name = "Street of Paname";

// console.log("Person =>>>>>", person);
// console.log("SecondPerson =>>>>>", secondPerson);

// Deep copy on an object

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

// JSON.parse + JSON.stringify

// const stringifiedPerson = JSON.stringify(person);
// console.log(typeof stringifiedPerson);
// console.log(stringifiedPerson);
// const parsedStringifiedPerson = JSON.parse(stringifiedPerson);
// console.log(typeof parsedStringifiedPerson);
// console.log(parsedStringifiedPerson);

// Deep copying an array

// const classroom = [
//   {
//     name: "Bob",
//     age: 10,
//   },
//   {
//     name: "Alice",
//     age: 20,
//   },
//   {
//     name: "John",
//     age: 9,
//   },
// ];

// const secondClassRoom = [...classroom];

// secondClassRoom[1].name = "FOOOOOOOOOOOOOOOOOOOOOOOOOOOO";

// console.log("Classroom =>>>>", classroom);
// console.log("Second classroom =>>>>", secondClassRoom);

// Deep copy

const classroom = [
  {
    name: "Bob",
    age: 10,
  },
  {
    name: "Alice",
    age: 20,
  },
  {
    name: "John",
    age: 9,
  },
];

// const stringiedClassroom = JSON.stringify(classroom);
// console.log(typeof stringiedClassroom);
// console.log(stringiedClassroom);
// const parsedStringiedClassroom = JSON.parse(stringiedClassroom);
// console.log(typeof parsedStringiedClassroom);
// console.log(Array.isArray(parsedStringiedClassroom));
// console.log(parsedStringiedClassroom);

// console.log(JSON.parse(JSON.stringify(classroom)));
