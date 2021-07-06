class Shoes {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  changeColor(color) {
    this.color = color;
  }
}

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log(`I am ${this.name} and i am walking`);
  }
}

const nikes = new Shoes("Nikes", "white");
const nikes2 = new Shoes("Nikes", "white");

const reeboks = new Shoes("Reebok", "black");

console.log(nikes === reeboks);
console.log(nikes === nikes2);

// console.log(nikes);
// console.log(nikes2);

const falseNikes = {
  brand: "Nikes",
  color: "grey",
};
// console.log(falseNikes);

// console.log(nikes instanceof Shoes);

// console.log(falseNikes instanceof Shoes);

nikes.changeColor("dodgerblue");

// console.log(nikes);

// falseNikes.changeColor();

const elements = [new Shoes("Dc Martens", "black"), new Person("Nina")];

for (let element of elements) {
  if (element instanceof Shoes) {
    element.changeColor("purple");
  } else if (element instanceof Person) {
    element.walk();
  }
}

console.log(elements);
