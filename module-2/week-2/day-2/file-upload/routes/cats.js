const express = require("express");
const uploader = require("../config/cloudinary");
const router = express.Router();
const Cat = require("../models/Cat");
// get all
router.get("/", (req, res, next) => {
  Cat.find()
    .then((catDocuments) => {
      res.render("cats.hbs", { cats: catDocuments });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/create", (req, res, next) => {
  res.render("catCreate.hbs");
});

// POST cat
//  In order to read data of type form-data
// You need a special middleware named "multer"
// Multer provides a middleware function that reads requests of type form-data
// puts the information that isnt binary @req.body
// and the information that is a file @req.file

router.post("/", uploader.single("picture"), (req, res, next) => {
  const { name } = req.body;

  const newCat = { name };

  if (req.file !== undefined) {
    newCat.picture = req.file.path;
  }

  Cat.create(newCat)
    .then((cat) => {
      res.redirect("/cats");
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
