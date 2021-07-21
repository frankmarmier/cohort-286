const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const animeSchema = new Schema({
  title: String,
  picture: String,
  description: String,
  releaseDate: Date,
  numberOfEpisodes: Number,
});

const Anime = mongoose.model("Anime", animeSchema);

module.exports = Anime;

// Anime.find()
// Anime.create()
// Anime.findByIdAndUpdate()
