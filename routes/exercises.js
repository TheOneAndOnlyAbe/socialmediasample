const express     = require("express"),
      router      = express.Router(),
      Exercise    = require("../models/exercise.js");

router.get("/addExercise", (req, res) => {
  res.render("addExercise");
});

router.post("/addExercise", (req, res) => {
  // This aligns the body parts with what the user chose so that it can be easily saved in the MongoDB database
  const bodyParts   = ["chest", "back", "abs", "legs"];
  let myChosenParts = [req.body.chest, req.body.back, req.body.abs, req.body.legs],
      finalParts    = [];

  // This loop adds the parts to the finalParts array
  for(let i = 0; i < 4; i++){
    if(myChosenParts[i] === "on"){
      finalParts.push(bodyParts[i]);
    }
  }

  // Puts all of the data including the finalParts into an object
  let newExercise = {
    name: req.body.name,
    reps: req.body.reps,
    bodyParts: finalParts,
    difficulty: req.body.difficulty,
    instructions: req.body.instructions
  }

  // Makes the exercise with the newExercise objects
  Exercise.create(newExercise, (err, madeExercise) => {
    if(err){
      console.log(err);
    }

    res.redirect("/home");

  });
});

module.exports = router;
