const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// todo : fill the Scheam below !

const albumSchema = new Schema();

const AlbumModel = mongoose.model("album", albumSchema);

module.exports = AlbumModel;

// An album will have the keys below,
// pay attention to label and artist
// and album is related to an artist and a label

// {
//     title:
//     releaseDate
//     label: relation
//     artist: relation
//     cover:
//   },
