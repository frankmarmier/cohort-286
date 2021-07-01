const firstArray = [1, 2, 3];
const secondArray = [1, 2, 3];

console.log(firstArray === secondArray);

const firstObject = { name: "Lola" };
const secondObject = { name: "Lola" };

console.log(firstObject === secondObject);

console.log([] === []);
console.log({} === {});

// Comparing objects and arrays

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringifys

// console.log(JSON.stringify(firstObject));
// console.log(typeof JSON.stringify(firstObject));
// console.log(JSON.stringify(secondObject));
// console.log(typeof JSON.stringify(secondObject));

// const stringifiedObject = JSON.stringify(firstObject);
// const stringifiedSecondObject = JSON.stringify(secondObject);

// console.log(stringifiedObject === stringifiedSecondObject);

const devSquad = [
  {
    age: 10,
    name: "Bob",
  },
  {
    age: 20,
    name: "Alice",
  },
];
function getAverageClassAge(classRoom) {
  console.log(classRoom);

  let total = 0;
  for (let i = 0; i < classRoom.length; i++) {
    console.log(classRoom[i]);
    total += classRoom[i].age;
  }

  console.log(total);
  return total / classRoom.length;
}

const result = getAverageClassAge(devSquad);
console.log(result);

const devSquad286 = [
  {
    name: "Olivier",
    age: 19,
  },
  {
    name: "Johanna",
    age: 21,
  },
  {
    name: "Abdoulaye",
    age: 22,
  },
];

const result2 = getAverageClassAge(devSquad286);
console.log("second average", result2);

const devSquad101 = [
  {
    age: 10,
    name: "John",
  },
  {
    name: "Foo",
  },
  "Bar",
];

function getAverageClassAgeImproved(classRoom) {
  let total = 0;
  for (let i = 0; i < classRoom.length; i++) {
    if (classRoom[i].age !== undefined) {
      total += classRoom[i].age;
    }
  }

  return total / classRoom.length;
}

const result3 = getAverageClassAgeImproved(devSquad101);
console.log(result3);

function getAverageClassAgeImprovedV2(classRoom) {
  let total = 0;
  for (let i = 0; i < classRoom.length; i++) {
    if (classRoom[i].age !== undefined) {
      total += classRoom[i].age;
    } else {
      //   return null;
      throw Error(
        "PLEASE PROVIDER AN ARRAY CONTAINING OBJECTS THAT HAVE AN AGE PROPERTY"
      );
    }
  }

  return total / classRoom.length;
}

//   const result4 = getAverageClassAgeImprovedV2(devSquad101);
//   console.log(result4);

try {
  const result4 = getAverageClassAgeImprovedV2(devSquad101);
  console.log(result4);
} catch (error) {
  //   console.log(error);
  if (error.name === "ReferenceError") {
    // process.exit(1); // ONLY FOR NODEJS
  }
}

console.log("I am after the error !");

const names = ["foo", "bar", "baz", "bob"];

// filterWithLetter(name, "b") => ["bar","baz","bob"]

function filterWithLetter(array, letter) {
  if (array.length === 0) {
    return null;
  }

  const newArray = [];

  for (let element of array) {
    if (element.startsWith(letter)) {
      newArray.push(element);
    }
  }

  if (newArray.length === 0) {
    return null;
  }

  return newArray;
}

const filteredNamesByB = filterWithLetter(names, "b");
const filteredNamesByF = filterWithLetter(names, "f");
const filteredNamesByC = filterWithLetter(names, "c");
console.log(filteredNamesByB);
console.log(filteredNamesByF);
console.log(filteredNamesByC);

const filteredNamesByX = filterWithLetter([], "x");
const filteredNamesByP = filterWithLetter(["x", "z", "h"], "p");
const filteredNamesByM = filterWithLetter(["Manon", "Majdi", "Mohammed"], "M");
// console.log(filteredNamesByX);
// console.log(filteredNamesByP);
// console.log(filteredNamesByM);

const numbers = [1, 2, 3, 10, 22];

// sum(numbers) =>

function sum(array) {
  let total = 0;
  for (let element of array) {
    console.log(typeof element);
    // console.log(element);

    if (
      (!isNaN(element) && typeof element === "number") ||
      typeof element === "boolean"
    ) {
      total += element;
    } else if (typeof element === "string") {
      total += element.length;
    }

    // if (Number.isInteger(element)) {
    //   total += element;
    // } else if(typeof element  ) {
    //   total += element.length;
    // }
  }
  return total;
}

// const sum1 = sum(numbers);
// console.log(sum1);

// const sum2 = sum([1, 5, 3, "strings", {}, [], false, true, NaN]);
// console.log(sum2);

// const student = {
//   name: "Mickaelle",
//   description: "Loves JavaScript",
//   hobbies: ["dancing", "drinking ?", "partying", "coding"],
// };

// => `Hey, my name is Mickaelle, I like dancing, drinking ? , partying, coding`

function describeAllYourHobbies(toto) {
  let result = `Hey, my name is ${toto.name}, I like ${toto.hobbies.join(
    ", "
  )}`;

  return result;

  //   let result = "";

  //   result = "Hey my name is " + toto.name + ", I like ";

  //   for (let hobby of toto.hobbies) {
  //     result += ", " + hobby;
  //   }

  //   return result;
}

// console.log(describeAllYourHobbies(student));

const student = {
  location: {
    street: {
      name: "Rigoles",
      number: 20,
      latLng: {
        lat: 3.33333,
        lng: 100,
      },
      neighbours: [
        {
          name: "Foo",
        },
        { name: "Joe" },
        { name: "Tom" },
      ],
    },
  },
};
