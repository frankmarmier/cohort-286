const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  password: String,
  email: { type: String, required: true, unique: true },
  roles: {
    type: String,

    enum: ["admin", "editor", "viewer"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
