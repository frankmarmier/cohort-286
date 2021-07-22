const express = require("express");
const RubberDuck = require("../models/RubberDuck");
const mongoose = require("mongoose");

const router = express.Router();

router.get("/ducks", (req, res) => {
  console.log(req.query);
  //   res.send(req.query);

  //   console.log(req.query);
  RubberDuck.find(req.query)
    .then((rubberDuckDocuments) => {
      res.render("ducks/listDuck.hbs", {
        ducks: rubberDuckDocuments,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// router.get("/ducks", (req, res) => {
//   RubberDuck.find()
//     .then((rubberDuckDocuments) => {
//       res.render("ducks/listDuck.hbs", {
//         ducks: rubberDuckDocuments,
//       });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

router.get("/ducks/:id", (req, res) => {
  const isValid = mongoose.isValidObjectId(req.params.id);

  if (isValid) {
    RubberDuck.findById(req.params.id)
      .then((duckDocument) => {
        console.log(duckDocument);
        res.render("ducks/oneDuck.hbs", {
          duck: duckDocument,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.render("not-found.hbs");
  }
});

// router.get("/ducks/:id", (req, res) => {
//   console.log(req.params);
//   res.send(req.params);
// });

module.exports = router;
