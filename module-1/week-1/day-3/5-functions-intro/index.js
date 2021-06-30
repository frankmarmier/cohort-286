function myFunction() {
  // function body over here
} // This is how you defined a function

// function myOtherFunction(parameter1,parameter2,parameter3,parameter4,...){

// }

function sum(number1, number2) {
  let result = number1 + number2;

  return result;

  console.log("I am not being logged !");

  // same as

  // return number1 + number2;

  //   console.log(number1, number2);
  //   console.log(number1 + number2);

  // By default in JavaScript if you ommit the return keyword,
  // the function will return, and the value will be undefined
  return;
}

// sum();
// sum(4, 10);
// sum(5, 25);

// let result = 4 + 10;
// let otherResult = 25 + 5;

// let myValue = sum(4, 10);
// console.log(myValue);

function aSimpleFunction(parameter) {
  console.log("Paramter is : ", parameter);
}

function aCallBack() {
  console.log("I am a callback !");
}

aSimpleFunction({});
aSimpleFunction([]);
aSimpleFunction(3);
aSimpleFunction("string");
aSimpleFunction(null);
// aSimpleFunction(aCallBack);

const myFatArrowFunction = () => {
  console.log("I am a function");
};

myFatArrowFunction();
