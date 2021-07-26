require("dotenv/config");
const mongoose = require("mongoose");
const Cat = require("../models/Cat");

const cats = [{ name: "Foo" }, { name: "Bar" }, { name: "Baz" }];

(async () => {
  try {
    await mongoose.connect(process.envMONGODB_URI);
    const createdCats = await Cat.create(cats);
    console.log(createdCats);
  } catch (error) {
    console.log(error);
  }
})();
