const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/me", function (req, res, next) {
  User.findById(req.session.currentUser._id)
    .select("-password") // remove user password from the query
    .then((userDocument) => {
      res.status(200).json(userDocument);
    })
    .catch(next);
});

module.exports = router;
