const express = require("express");
const RubberDuck = require("../models/RubberDuck");
const router = express.Router();

router.get("/ducks", (req, res) => {
  RubberDuck.find()
    .then((rubberDuckDocuments) => {
      res.render("ducks/listDuck.hbs", {
        ducks: rubberDuckDocuments,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
