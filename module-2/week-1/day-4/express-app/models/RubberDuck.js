const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rubberDuckSchema = new Schema({
  weight: Number,
  height: Number,
  job: String,
  price: Number,
  color: String,
  isAvailable: Boolean,
  material: {
    type: String,
    enum: ["plastic", "gold", "wood"],
  },
});

const RubberDuck = mongoose.model("RubberDuck", rubberDuckSchema);

module.exports = RubberDuck;
