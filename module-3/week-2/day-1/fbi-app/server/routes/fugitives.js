const express = require("express");
const router = express.Router();
const Fugitive = require("../models/Futigitive");

/**
 * All routes here are prefixed with /api/fugitives
 */

// GET http://localhost:PORT/api/fugitives
router.get("/", (req, res, next) => {
  Fugitive.find()
    .then((fugitiveDocuments) => {
      // in module 2 it was :
      //   res.render("my-view", {fugitives: fugitiveDocuments})
      // in module 3
      res.status(200).json(fugitiveDocuments);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

// POST http://localhost:PORT/api/fugitives
router.post("/", (req, res, next) => {
  Fugitive.create(req.body)
    .then((fugitiveDocument) => {
      res.status(201).json(fugitiveDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
