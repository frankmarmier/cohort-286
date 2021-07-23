const express = require("express");
const router = express.Router();
const Cat = require("../models/Cat");

router.get("/cats", (req, res) => {
  Cat.find()
    .then((dbRes) => {
      res.render("cats/list.hbs", {
        cats: dbRes,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/cats", (req, res) => {
  Cat.create(req.body)
    .then((createdCat) => {
      console.log(createdCat);
      res.redirect("/cats/" + createdCat._id);
    })
    .catch((error) => {
      console.log(error);
    });

  //   res.send(req.body);
});

router.get("/cats/:id", (req, res) => {
  console.log(req.params);

  Cat.findById(req.params.id)
    .then((dbRes) => {
      //   res.send(dbRes);
      res.render("cats/oneCat.hbs", { cat: dbRes });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/cats/:catId/delete", (req, res) => {
  Cat.findByIdAndDelete(req.params.catId)
    .then(() => {
      res.redirect("/cats");
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/cats/:id/update", (req, res) => {
  Cat.findByIdAndUpdate(req.params.id, req.body)
    .then((catDocument) => {
      res.redirect("/cats/" + catDocument._id);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/cats/:id/update", (req, res) => {
  Cat.findById(req.params.id)
    .then((dbRes) => {
      res.render("cats/form.hbs", {
        cat: dbRes,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/cats/create/one", (req, res) => {
  res.render("cats/form.hbs");
});

module.exports = router;
