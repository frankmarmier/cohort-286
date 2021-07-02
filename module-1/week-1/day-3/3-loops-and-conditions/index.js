// Write a loop that starts at 0 and stops at 100;
// For every number between 0 and 100 that is dividable by 5, print "Foo !"

for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log("Foo !", i);
  }
}

const myString = "I like turtles";

// Write a loop that goes over myString and create a new string that doesn't contain
// the letters "l" and "t"; => output should be "I ike ures"

let newString = "";

// for (let i = 0; i < myString.length; i++) {
//   if (myString[i] !== "t" && myString[i] !== "l") {
//     newString += myString[i];
//   }
// }

for (let letter of myString) {
  if (letter !== "t" && letter !== "l") {
    newString += letter;
  }
}

console.log(newString);
