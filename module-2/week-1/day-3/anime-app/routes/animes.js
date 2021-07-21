const express = require("express");
// const Anime = require("../models/Anime");
const Anime = require("./../models/Anime"); // same as above

const router = express.Router();
// const router = new express.Router(); // same as above

// in index.js

// app.use("/animes", animeRouter);

// route is prefixed with /animes already
router.get("/", (req, res, next) => {
  Anime.find()
    .then((animeDocuments) => {
      console.log("Anime list in /animes", animeDocuments);
      res.render("anime/animeList.hbs", {
        animes: animeDocuments,
      });
    })
    .catch((error) => {
      console.log(error);
    });

  //   res.render("anime/animeList.hbs");
});

module.exports = router;
