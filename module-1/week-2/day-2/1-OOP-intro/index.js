class Car {
  constructor(brand, color) {
    if (!brand || !color) {
      throw Error("You must provide color & brand values");
    }

    this.brand = brand;
    this.color = color;
    this.wheels = 4;
  }

  drive() {
    console.log(`Driving ${this.brand} vroom vroom`);
  }
}

// an instance of a class
const myMercedes = new Car("Mercedes", "red");
const myMustang = new Car("Mustang", "dodgerblue");

console.log(myMercedes);
console.log(myMustang);

myMercedes.drive();
myMustang.drive();

// console.log(myMercedes.brand);
// console.log(myMercedes.color);
// console.log(myMercedes.wheels);
