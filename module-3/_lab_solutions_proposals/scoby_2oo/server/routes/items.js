const express = require("express");
const router = express.Router();
const Item = require("../models/Item");
const uploader = require("../config/cloudinary");
const requireAuth = require("../middlewares/requireAuth"); // Route protection middleware : )
const validateId = require("../middlewares/validateId");

// (R) Read all Items
// Responses:
// 200 : The list of items
// 500 : error
router.get("/", (req, res, next) => {
  Item.find({})
    .populate("creator") // Gives us the author's id creator object document instead of just the id : )
    .then((itemDocuments) => {
      res.status(200).json(itemDocuments);
    })
    .catch(next); // cf app.js error handling middleware
  // same as below
  //.catch(error => next(error))
});

// (C) Create an Item
// Requires the user to be authenticated
// Responses:
// 201 : Responds with the created document
// 500 : error
router.post("/", requireAuth, uploader.single("image"), (req, res, next) => {
  const updateValues = req.body;

  if (req.file) {
    updateValues.image = req.file.path;
  }

  updateValues.creator = req.session.currentUser; // Retrieve the authors id from the session.

  Item.create(updateValues)
    .then((itemDocument) => {
      itemDocument
        .populate("creator")
        .execPopulate() // Populate on .create() does not work, but we can use populate() on the document once its created !
        .then((item) => {
          res.status(201).json(item); // send the populated document.
        })
        .catch(next);
    })
    .catch(next);
});

// (R) Read one Item
// Responses:
// 400 : Incorrect mongoose id
// 404 : No item found
// 200 : Responds with the updated document
// 500 : error
router.get("/:itemId", validateId("itemId"), (req, res, next) => {
  Item.findById(req.params.itemId)
    .then((itemDocument) => {
      if (!itemDocument) {
        return res.status(404).json({ message: "No item was found" });
      } else {
        res.status(200).json(itemDocument);
      }
    })
    .catch(next);
});

// (U) Update an Item
// Requires the user to be authenticated
// Responses:
// 400 : Incorrect mongoose id
// 404 : No item found
// 403 : Creator id doesn't match the session user id
// 200 : Responds with the updated document
// 500 : error
router.patch(
  "/:id",
  requireAuth,
  validateId("id"),
  uploader.single("image"),
  (req, res, next) => {
    const item = { ...req.body };

    Item.findById(req.params.id)
      .then((itemDocument) => {
        if (!itemDocument)
          return res.status(404).json({ message: "Item not found" });
        if (itemDocument.creator.toString() !== req.session.currentUser) {
          return res
            .status(403)
            .json({ message: "You are not allowed to update this document" });
        }

        if (req.file) {
          item.image = req.file.secure_url;
        }

        Item.findByIdAndUpdate(req.params.id, item, { new: true })
          .populate("creator")
          .then((updatedDocument) => {
            return res.status(200).json(updatedDocument);
          })
          .catch(next);
      })
      .catch(next);
  }
);

// (D) Delete an Item
// Requires the user to be authenticated
// Responses:
// 400 : Incorrect mongoose id
// 404 : No item found
// 403 : Creator id doesn't match the session user id
// 204 : Successful
// 500 : error
router.delete("/:id", requireAuth, validateId("id"), (req, res, next) => {
  Item.findById(req.params.id)
    .then((itemDocument) => {
      if (!itemDocument) {
        return res.status(404).json({ message: "Item not found" });
      }
      if (itemDocument.creator.toString() !== req.session.currentUser) {
        return res.status(403).json({ message: "You can't delete this item" });
      }

      Item.findByIdAndDelete(req.params.id)
        .then(() => {
          return res.sendStatus(204);
        })
        .catch(next);
    })
    .catch(next);
});

module.exports = router;
