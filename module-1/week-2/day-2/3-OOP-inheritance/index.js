class Human {
  constructor(name) {
    this.name = name;
    this.eyesAmount = 2;
    this.earsAmount = 2;
  }

  eat(food) {
    console.log(`Hi i am ${this.name} I am eating ${food}`);
  }

  walk() {
    console.log(`Hi, i am ${this.name} I love walking`);
  }

  sleep() {
    console.log(`Hi, i am ${this.name} I can walking`);
  }
}

class SuperHuman extends Human {
  // constructor is not always mandatory

  constructor(superpower, name) {
    super(name); // Has to be invoked first
    this.superpower = superpower;
  }

  fly() {
    console.log(`I am flying ${this.name}`);
  }
}

const franck = new Human("Franck");
const nina = new SuperHuman("CSS", "Nina");

// console.log(franck);
// franck.eat();
// franck.walk();
// franck.sleep();

// console.log(nina);

nina.walk();
nina.sleep();
nina.eat("tacos");
nina.fly();

// franck.fly();

class Adult extends Human {
  /* If the child class has the exact same
     properties as the parents class (extends from)
     you do not need to invoke the constructor
  */

  //   constructor(something) {
  //     super(something);
  //   }

  walk() {
    super.walk();
    console.log("I am walking faster");
  }
}

class Baby extends Human {
  /*  Human class has a walk method
      you can override methods in the child class
      by just declaring a method with the same name
   */

  walk() {
    console.log(`I am ${this.name} i am crawling...`);
  }
}

const myBaby = new Baby("Toto");
const adult = new Adult("Guillaume");

console.log(myBaby);
console.log(adult);
adult.walk();
myBaby.walk();
