const express     = require("express"),
      router      = express.Router(),
      Exercise    = require("../models/exercise.js");

router.get("/", (req, res) => {
  res.render("landing");
});

router.get("/home", (req, res) => {
  Exercise.find({}, (err, exercises) => {
    if(err){
      console.log(err);
    }
    else{
      res.render("home", {exercises: exercises});
    }
  });
});

router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
