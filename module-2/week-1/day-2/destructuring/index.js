/**
 * Destructure an object
 */

// const cat = { name: "Lola", age: 20, city: "Paname" };

// const city = cat.city;
// const name = cat.name;
// const age = cat.age;

// const { age, name, city, isHappy } = cat;

// console.log(isHappy);
// console.log(name, age, city);

// const { age, ...everythingThatIsLeft } = cat;

// console.log(age);
// console.log(everythingThatIsLeft);

// const displayCatInfo = (object) => {
//   //   console.log("In function:", object);
//   console.log(
//     `Cat name ${object.name}, cat age: ${object.age}, cat city: ${object.city}`
//   );
// };

// const displayCatInfo = ({ name, age, city }) => {
//   //   console.log("In function:", object);

//   console.log(`Cat name ${name}, cat age: ${age}, cat city: ${city}`);
// };

// const displayCatInfo = ({ name, age, city }) => {
//   //   console.log("In function:", object);

//   console.log(`Cat name ${name}, cat age: ${age}, cat city: ${city}`);
// };

const cat = { name: "Lola", age: 20, city: "Paname" };

// const displayCatInfo = (object) => {
//   const { name, age, city, isHappy = true } = object;
//   console.log("the cat is happy", isHappy);

//   console.log(
//     `Cat name ${name}, cat age: ${age}, cat city: ${city} is the cat happy ${
//       isHappy ? "yes" : "no"
//     }`
//   );
// };

// displayCatInfo(cat);

/**
 * Destructuring Arrays
 */

const students = ["John", "Paul", "Alice", "Bob"];

// const [
//   firstStudent,
//   anotherOne,
//   anotherotherOne,
//   theLastOne,
//   whatisThisValue,
//   dzidjaoija,
// ] = students;

// console.log(dzidjaoija);
// console.log(firstStudent, anotherOne, anotherotherOne, theLastOne);

// const [first, ...restOfTheStudents] = students;

// console.log(restOfTheStudents);

function destructuringArrayAsParam(myArray) {
  console.log(myArray);
}

// function destructuringArrayAsParam([
//   firstStudent,
//   secondStudent,
//   ...restStudents
// ]) {
//   //   console.log(myArray);

//   // firstStudent = "HDUOIZAHEOUAHEUA";
//   console.log(firstStudent);

//   console.log(restStudents);
// }

// destructuringArrayAsParam(students);
