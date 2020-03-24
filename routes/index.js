const express     = require("express"),
      router      = express.Router(),
      Exercise    = require("../models/exercise.js");

router.get("/", (req, res) => {
  res.render("landing");
});

// Finds all of the exercises. This will eventually be changed to finding all workouts
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

module.exports = router;
