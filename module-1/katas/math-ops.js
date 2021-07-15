// Basic Mathematical Operations Solution
// Link : https://www.codewars.com/kata/57356c55867b9b7a60000bd7

// Solution 1

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

function basicOp(operation, value1, value2) {
  /**
     * operations = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
        };

        When calling basicOp, taking as sample value for

                operation = "+"
                value1 = 10
                value2 = 5

        operation[operation] becomes: operations["+"]  => (a,b) => a + b;
        It points to a function, so in order to execute it we need to 
        open up the paranthesis:  operations["+"]()
        
        We then pass the values to that function:

        operations["+"](value1,value2) becomes: operations["+"](10,5);
        
     */
  return operations[operation](value1, value2);
}

// Solution 2

// function basicOp(operation, value1, value2) {
//   if (operation === "+") {
//     return value1 + value2;
//   }
//   if (operation === "-") {
//     return value1 - value2;
//   }
//   if (operation === "*") {
//     return value1 * value2;
//   }
//   if (operation === "/") {
//     return value1 / value2;
//   }
// }

// Solution 3

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+": {
//       return a + b;
//     }
//     case "-": {
//       return a - b;
//     }
//     case "*": {
//       return a * b;
//     }
//     case "/": {
//       return a / b;
//     }
//   }
// }
