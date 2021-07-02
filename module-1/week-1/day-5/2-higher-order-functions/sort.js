// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Be careful, the sort method mutates the array !

// const numbers = [9, 3, 4, 1, 6];

// console.log("Before sort =>", numbers);
// numbers.sort();

// console.log("After sort => ", numbers);

// const numbers = [9, 3, 4, 1, 6, 100, 120, 200, 10000];

// console.log("Before sort =>", numbers);
// numbers.sort();

// console.log("After sort => ", numbers);

const numbers = [9, 3, 4, 1, 6, 100, 120, 200, 10000];

// console.log("Before sort =>", numbers);

numbers.sort((a, b) => {
  //   if (a > b) {
  //     return -10000000000000000000000;
  //   }
  //   if (a < b) {
  //     return 13920302983290;
  //   }

  //   return 0;

  // 9 - 6 => 3
  // 1 - 100 => -99
  // 1 - 1 => 0
  //   return a - b; // Ascending
  return b - a; // Descending

  //
});
console.log(numbers);
console.log("With reverse", numbers.reverse());

// console.log("After sort => ", numbers);

// const students = ["Bob", "Alice", "abraham", "Zidane"];

// console.log("Before sort", students);
// students.sort();
// console.log("After sort", students);

// console.log("Before sort", students);

// students.sort((a, b) => {
//   if (a.toUpperCase() > b.toUpperCase()) {
//     return -1;
//   }
//   if (a.toUpperCase() < b.toUpperCase()) {
//     return 1;
//   }
//   return 0;
// });

// console.log("After sort", students);

// const students = ["Bob", "Alice", "àbraham", "abraham", "Zidane"];

// console.log("Before sort", students);

// students.sort((a, b) => {
//   //   if (a.toLowerCase().localeCompare(b.toLowerCase()) > 0) {
//   //     return 1;
//   //   }
//   //   if (a.toLowerCase().localeCompare(b.toLowerCase()) < 0) {
//   //     return -10;
//   //   }
//   //   return 0;

//   return a.toLowerCase().localeCompare(b.toLowerCase());
// });

// console.log("After sort", students);

const classroom = [
  {
    name: "John",
    age: 10,
  },
  { name: "Alice", age: 11 },
  { name: "Toto", age: 6 },
];

// console.log("Before sort", classroom);
classroom.sort(function (a, b) {
  //   console.log("this is a", a);
  //   console.log("this is b", b);

  //   return a.age - b.age;

  return b.age - a.age;
});
// console.log("After sort", classroom);
