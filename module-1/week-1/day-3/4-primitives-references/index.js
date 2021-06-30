// Primitive types - All the data types that aren't an object
// References - Can be mutated over time !

// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

let myString = "I like turtles";

let array = ["Foo", "Bar", "Baz"];

array[1] = "1000000";

console.log(array);

myString[2] = "P";

console.log(myString);
