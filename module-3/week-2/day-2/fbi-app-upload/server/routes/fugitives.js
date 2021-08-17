const express = require("express");
const router = express.Router();
const Fugitive = require("../models/Futigitive");
const mongoose = require("mongoose");
const uploader = require("../config/cloudinary");
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
router.post("/", uploader.single("picture"), (req, res, next) => {
  if (req.file) {
    req.body.picture = req.file.path;
  } else {
    req.body.picture = undefined;
  }

  Fugitive.create(req.body)
    .then((fugitiveDocument) => {
      res.status(201).json(fugitiveDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// PATCH http://localhost:PORT/api/fugitives/:id
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res
      .status(400)
      .json({ message: "The id parameter is not a valid mongodb objectId" });
  }

  //   const {firstName, ...etc} = req.body;
  const toUpdate = req.body;

  try {
    //   const updated = await Fugitive.findOneAndUpdate({_id: id})
    const updated = await Fugitive.findByIdAndUpdate(id, toUpdate, {
      new: true, // required to get the current document (updated)
    });

    res.status(200).json(updated);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// DELETE http://localhost:PORT/api/fugitives/:id
router.delete("/:id", (req, res, next) => {
  Fugitive.findByIdAndDelete(req.params.id)
    .then((fugitiveDocument) => {
      if (!fugitiveDocument) {
        return res
          .status(404)
          .json({ message: "This resource does not exist" });
      }
      //   res.status(200).json(fugitiveDocument);
      res.sendStatus(204);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res, next) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res
      .status(400)
      .json({ message: "The id parameter is not a valid mongodb objectId" });
  }

  Fugitive.findById(req.params.id)
    .then((fugitiveDocument) => {
      if (!fugitiveDocument) {
        return res
          .status(404)
          .json({ message: "This fugitive does not exist" });
      }
      res.status(200).json(fugitiveDocument);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

module.exports = router;
