const mongoose = require("mongoose");
const RubberDuck = require("../models/RubberDuck");

const rubberDucks = [
  {
    weight: 100,
    height: 170,
    job: "Doctor",
    price: 10,
    color: "yellow",
    isAvailable: true,
    material: "plastic",
  },
  {
    weight: 400,
    height: 100,
    job: "Lumberjack",
    price: 1000,
    color: "red",
    isAvailable: true,
    material: "gold",
  },
  {
    weight: 20,
    height: 40,
    job: "Hippie",
    price: 100,
    color: "brown",
    isAvailable: true,
    material: "wood",
  },
];

mongoose
  .connect("mongodb://localhost/ironhackers")
  .then(() => {
    RubberDuck.create(rubberDucks)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
