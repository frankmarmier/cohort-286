const numbers = [1, 5, 3, 6];

// Shallow copy with map

// const numbersCopy = numbers.map((number) => number);

// const anotherCopy = numbers;
// // console.log(anotherCopy === numbers);
// console.log(numbers === numbersCopy);

// const students = [{ name: "Bob" }, { name: "Alice" }, { name: "John" }];

// const studentsCopy = students.map((student) => student);
// const studentsCopy = students.map((student) => ({ ...student }));
// const studentsCopy = students.map((student) => {
//   return { ...student };
// });

// studentsCopy[0].name = "FOOOOOOOOOOOOOOOOOO";

// console.log(students);
// console.log(studentsCopy);

const fridge = [
  {
    name: "Carotte",
    weight: 10,
    type: "vegetable",
  },
  {
    name: "Beer",
    weight: 100,
    type: "beverage",
  },
  {
    name: "Tomatoes",
    weight: 150,
    type: "vegetable",
  },
  {
    name: "Cucumber",
    weight: 150,
    type: "vegetable",
  },
  {
    name: "Oranges",
    weight: 150,
    type: "fruit",
  },

  {
    name: "Mozarella",
    weight: 150,
    type: "dairy",
  },
  {
    name: "Aubergine",
    weight: 100,
    type: "vegetable",
  },
  {
    name: "Parmesan",
    weight: 150,
    type: "dairy",
  },
];

const ingredients = ["Carotte", "Aubergine", "Tomatoes", "Cucumber"];

const myRatatouille = fridge
  .filter((item) => {
    return ingredients.includes(item.name);
  })
  .map((item) => {
    return `Chopped ${item.name}`;

    // item.isChopped = true;
    // return item;
  });

console.log(myRatatouille);
