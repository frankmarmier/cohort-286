const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, unique: true },
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
