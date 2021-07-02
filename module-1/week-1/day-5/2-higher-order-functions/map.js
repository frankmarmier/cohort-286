// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const numbers = [1, 2, 10, 3];

const numbersDoubled = numbers.map((element) => {
  return element * 2;
});

// console.log(numbersDoubled);

// const numbersPresentingThemSelves = numbers.map((element) => {
//   return `Hey i'm the number ${element}`;
// });

// console.log(numbersPresentingThemSelves);

// const listNumbers = numbers.map((element) => {
//   return `<li>${element}</li>`;
// });

// console.log(listNumbers);

const names = ["John", "Bob", "Alice"];

const peopleGreeting = names.map((name) => {
  return `Hey my name is ${name}`;
});

console.log(peopleGreeting);

const students = [
  {
    name: "John",
    hobbies: ["Skating", "Partying"],
  },
  {
    name: "Alice",
    hobbies: ["Coding", "Partying"],
  },
  {
    name: "Toto",
    hobbies: ["Doing nothing"],
  },
];

const studentsPresentingThemSelves = students.map((student) => {
  return `Hey my name is ${student.name} and i like ${student.hobbies.join(
    ", "
  )}`;
});

// console.log(studentsPresentingThemSelves);
