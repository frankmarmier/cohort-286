// reduce

const students = [
  {
    name: "John",
    rating: 10,
  },
  {
    name: "Bob",
    rating: 11,
  },
  {
    name: "Alice",
    rating: 33,
  },
  {
    name: "Pascal",
    rating: 5,
  },
  {
    name: "Pascal",
    rating: 5,
  },
];

const result = students.reduce((acc, currentValue, index) => {
  if (index % 2 === 0) {
    return currentValue.rating + acc;
  }
  return acc;
}, 0);

// console.log(result);

// filter

const filteredStudents = students.filter((student) => {
  return student.rating <= 10;
});

// console.log(filteredStudents);

// Spreads

function myFunction(a, b, c, ...rest) {
  //   console.log(arguments);
}

let array = [1, 2, 3, 5, 6, 6];
myFunction(...array);
