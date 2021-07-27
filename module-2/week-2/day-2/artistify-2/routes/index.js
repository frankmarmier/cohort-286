const express = require("express");
const router = express.Router();

const ArtistModel = require("./../models/Artist");
const AlbumModel = require("./../models/Album");
const LabelModel = require("./../models/Label");
const StyleModel = require("./../models/Style");

/* GET home page. */

router.get("/", (req, res) => {
  res.render("index");
});

/* GET dashboard page  */

router.get("/dashboard", async (req, res, next) => {
  try {
    const dbRes = await Promise.all([
      ArtistModel.find(),
      LabelModel.find(),
      StyleModel.find(),
    ]);

    res.render("dashboard/index", {
      artistsCount: dbRes[0].length,
      labelsCount: dbRes[1].length,
      stylesCount: dbRes[2].length,
    });
  } catch (dbErr) {
    next(err);
  }
});

router.get("/artist", async (req, res, next) => {
  try {
    res.render("artists", {
      artists: await ArtistModel.find(),
    });
  } catch (err) {
    next(err);
  }
});

router.get("/artist/:id", async (req, res, next) => {
  try {
    const artist = await ArtistModel.findById(req.params.id).populate("styles");
    // const styles = await StyleModel.find({ _id: artist.styles });

    // {
    //   name: "value",
    //   styles: ["3293232","329392392"],
    //   description : ""
    // }

    res.render("artist", artist);
  } catch (err) {
    next(err);
  }
});

router.get("/album", async (req, res, next) => {
  try {
    res.render("albums", {
      albums: await AlbumModel.find().populate("artist").populate("label"),
    });
  } catch (err) {
    next(err);
  }
});

router.get("/album/:id", async (req, res, next) => {
  try {
    res.render(
      "album",
      await AlbumModel.findById(req.params.id)
        .populate("artist")
        .populate("label")
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router; // MANDATORY
