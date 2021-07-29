const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const phoneSchema = new Schema({
  name: String,
  brand: String,
  price: Number,
  color: String,
});

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;
