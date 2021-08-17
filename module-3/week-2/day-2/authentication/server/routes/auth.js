const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();
const salt = 10;

router.post("/signin", (req, res, next) => {
  const { email, password } = req.body;

  console.log(req.body);
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  User.findOne({ email })
    .then((userDocument) => {
      if (!userDocument) {
        console.log("there");
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isValidPassword = bcrypt.compareSync(
        password,
        userDocument.password
      ); // Will send back a boolean if password sent in req.body doesnt
      //match userDocument's password.
      // => If it doesnt match (false) send an error message
      // => If it matchs, the email & password are valid, set the user in the session.
      if (!isValidPassword) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // This line makes the user logged in
      // In YOUR authentication logic
      req.session.currentUser = {
        _id: userDocument._id,
      };

      res.redirect("/api/users/me");
    })
    .catch(next);
});

router.post("/signup", (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  if (!email || !password || !firstName || !lastName) {
    return res.status(400).json({ message: "All fields are required" });
  }

  User.findOne({ email })
    .then((userDocument) => {
      if (userDocument) {
        return res.status(400).json({ message: "Email taken" });
      }

      const hashedPassword = bcrypt.hashSync(password, salt);

      const newUser = { email, lastName, firstName, password: hashedPassword };

      User.create(newUser)
        .then(() => {
          res.sendStatus(201); // Send a 201 status to indicate that the user has been created.
        })
        .catch(next);
    })
    .catch(next);
});

router.get("/logout", (req, res, next) => {
  if (req.session.currentUser) {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      } else {
        res.sendStatus(204);
      }
    });
  } else {
    console.log("here");
    res.status(400).json({ message: "No session" });
  }
});

module.exports = router;
