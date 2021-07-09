// const myNameIs = "Slim shady";

export function formatDate() {
  return new Date().getDay();
}

export function getRandomNumberBetween(a, b) {
  return Math.floor(Math.random() * a - b) - b;
}

export function findElement(array, elementToFind) {
  return array.find((el) => el === elementToFind);
}

// export function XXXX

// This is called a named export
// the way to import these
// is as follows

// import {
//   formatDate,
//   getRandomNumberBetween,
//   findElement,
// } from "./path/another-script.js";
