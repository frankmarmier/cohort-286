// Javascript Data Types

// Being sure about the data type

// console.log(typeof myValue)

// object
// number
// string
// boolean
// null
// undefined

// symbols
// Big Int

// Number Data type

// 2 + 2 => 4
// 2 * 2 => 4
// 2 **2 => 8
// 2 / 2 => 1
// 2 - 2 => 0
// 2 % 2 => 0

// Transforming a value into a number
// Number(value) => The number or NaN
// +value

// String data type

const myString = "I am string !"; // Double quote
const myOtherString = "I am another string"; // Simple quote
const myTemplateString = `I am another string 
 
I am written on another line,
I love programming,
and socks.


`; // Backticks

//  "I love " + "football" => "I love football"  String concatenation
// "" + myValue => Transforms a value into a string

// const phrase = "I am looking for something";

// phrase.includes("looking") // => true

// const myDog = "Tarak";

// const myTemplateString = `I have a dog named ${myDog}`;
// const myTemplateString = "I have a dog named " + myDog;

// Boolean Data Type

// Boolean Table

// And Operator  (false wins)

// true && true => true
// true && false => false
// true && true && true && true && false => false
// false && true && true && true && false => false

// OR Operator (true wins)

// true || false =>  true
// false || false => false
// true || true => true
// false || false || true => true

// !true => false
// !false => true
// !!true => true
// !!false => false

// Boolean("Hey i'm a string") => true
// Boolean(0) => false

// true + false => 1
// true + true => 2

// null and undefined

// A developer took time and initialized explicitly a value to null
// let myValue = null;

// A developer never initialized a variable with a value
// let myOtherValue;

// let vs const

// let is when you want to reassign a value to the variable
// const is when you don't want the value to be reassignable

// let sum = 0;

// sum = sum + 1;
