// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const numbers = [1, 1, 1];

const sum = numbers.reduce((acc, currValue) => {
  return (acc += currValue);
});

// console.log(sum);

const students = [
  { name: "Bob", age: 10 },
  {
    name: "Alice",
    age: 10,
  },
];

// const totalAge = students.reduce((acc, currValue) => {
//   return (acc += currValue.age);
// }, 0);
// const avg =
//   students.reduce((acc, currValue) => {
//     return (acc += currValue.age);
//   }, 0) / students.length;

// console.log("The average", avg);
// console.log(totalAge);

// const arrayofNumbers = [10, 3, 4, 6, 11];

// const filteredArray = arrayofNumbers.reduce((acc, currentValue) => {
//   if (currentValue > 6) {
//     acc.push(currentValue);
//   }
//   return acc;
// }, []);

// console.log(filteredArray);
