const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone");

router.get("/", function (req, res, next) {
  Phone.find()
    .then((phones) => {
      res.status(200).json(phones);
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/:id", function (req, res, next) {
  Phone.findById(req.params.id)
    .then((phone) => {
      res.status(200).json(phone);
    })
    .catch((error) => {
      next(error);
    });
});

router.post("/", (req, res, next) => {
  Phone.create(req.body)
    .then((createdDocument) => {
      res.status(201).json(createdDocument);
    })
    .catch((error) => {
      next(error);
    });
});

router.patch("/:id", (req, res, next) => {
  console.log(req.body);
  console.log(req.params.id);

  Phone.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedPhone) => {
      res.status(200).json(updatedPhone);
    })
    .catch((error) => {
      next(error);
    });
});

router.delete("/:id", (req, res, next) => {
  Phone.findByIdAndDelete(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
