const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fugitiveSchema = new Schema({
  firstName: String,
  lastName: String,
  lastSeen: Date,
  found: Boolean,
  archived: { type: Boolean, default: false },
  picture: String,
  threatLevel: { type: String, enum: ["low", "medium", "high"] },
});

const Fugitive = mongoose.model("Fugitive", fugitiveSchema);

module.exports = Fugitive;
