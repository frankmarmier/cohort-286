// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
import Shoe from "./Shoe.js";
import {
  formatDate,
  getRandomNumberBetween,
  findElement,
} from "./another-script.js";

// window .addEventListener("DOMContentLoaded", () => {
//   console.log(document.querySelector("h1"));
// });

console.log(document.querySelector("h1"));

// console.log(myNameIs);

const shoe = new Shoe();
console.log(shoe);

console.log(findElement);

// const list = "my list";
