// Methods : A method is simply a function in an object
/*
const player1 = {
  health: 100,
  strength: 50,
};

const player2 = {
  health: 100,
  strength: 40,
};

// Player 1 Attacks
player2.health = player2.health - player1.strength;
// console.log(player2);

if (player2.health <= 0) {
  console.log("Player 2 is W A S T E D");
}
// Player 2 Attacks
player1.health = player1.health - player2.strength;
console.log("Player 1", player1);

if (player1.health <= 0) {
  console.log("Player 1 is W A S T E D");
}
// Player 1
player2.health = player2.health - player1.strength;

if (player2.health <= 0) {
  console.log("Player 2 is W A S T E D");
}

console.log("Player 2", player2);

*/

// const player1 = {
//   name: "John",
//   health: 100,
//   strength: 50,
//   attack() {
//     return this.strength;
//   },

//   takeDamage(damage) {
//     this.health = this.health - damage;
//     if (this.health <= 0) {
//       console.log(`${this.name} has been W A S T E D`);
//     }
//   },
// };

// const player2 = {
//   name: "Bob",
//   health: 100,
//   strength: 40,
//   attack() {
//     return this.strength;
//   },

//   takeDamage(damage) {
//     this.health = this.health - damage;
//     if (this.health <= 0) {
//       console.log(`${this.name} has been W A S T E D`);
//     }
//   },
// };

const player1 = {
  name: "John",
  health: 100,
  strength: 50,
  attack: attack,
  takeDamage: takeDamage,
};

const player2 = {
  name: "Bob",
  health: 100,
  strength: 40,
  attack: attack,
  takeDamage: takeDamage,
};

// console.log(player2);

// Player 1 attacks

// player2.takeDamage(player1.attack());
// Player 2 attacks
// player1.takeDamage(player2.attack());
// Player 1 attacks
// player2.takeDamage(player1.attack());

function takeDamage(damage) {
  console.log(this);
  console.log("I am taking damage", this.name);
  this.health = this.health - damage;
  if (this.health <= 0) {
    console.log(`${this.name} has been W A S T E D`);
  }
}

function attack() {
  return this.strength;
}

// In NODEJS "this" is {}
// In the browser, "this" will refer to the global object which is window
// unless you have the type=module on your script it is undefined
// console.log(this);

// TAKE 5 MINUTES to create an object
// inside that object create a function
// and log "this" inside the object
// and log a property of your object

// Fat Arrow functions don't come with their own this

// const myObject = {
//   name: "Alice",
//   street: {
//     name: "Paname",
//     // displayStreet: () => {
//     //   console.log(this);
//     // },
//     displayStreet: function () {
//       console.log(this);
//     },
//   },
//   greeting: () => {
//     console.log("this", this);
//     this.health = 10000;
//   },
// };

// myObject.greeting();

// myObject.street.displayStreet.bind(myObject)();

// let aFunction = function () {
//   console.log("hello world");
// };

let a = aFunction;

let b = a;

let x = b;

// console.log(x);

let insideObject = {
  a: aFunction,
};

// Functions are hoisted
// to the "top"
function aFunction() {
  console.log("hello world");
  // return
}

// x();
