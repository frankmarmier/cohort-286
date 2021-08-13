const express = require("express");
const Guitar = require("../models/Guitar");
const router = express.Router();

router.get("/", function (req, res, next) {
  Guitar.find()
    .then((guitarDocuments) => {
      res.status(200).json(guitarDocuments);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  Guitar.findById(req.params.id)
    .then((guitarDocument) => {
      res.status(200).json(guitarDocument);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  Guitar.create(req.body)
    .then((guitarDocument) => {
      res.status(201).json(guitarDocument);
    })
    .catch(next);
});

module.exports = router;
