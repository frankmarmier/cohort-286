// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
// https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
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
