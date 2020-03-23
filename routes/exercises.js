const express     = require("express"),
      router      = express.Router(),
      Exercise    = require("../models/exercise.js");

router.get("/addExercise", (req, res) => {
  res.render("addExercise");
});

router.post("/addExercise", (req, res) => {
  const bodyParts   = ["chest", "back", "abs", "legs"];
  let myChosenParts = [req.body.chest, req.body.back, req.body.abs, req.body.legs],
      finalParts    = [];

  for(let i = 0; i < 4; i++){
    if(myChosenParts[i] === "on"){
      finalParts.push(bodyParts[i]);
    }
  }

  let newExercise = {
    name: req.body.name,
    reps: req.body.reps,
    bodyParts: finalParts,
    difficulty: req.body.difficulty,
    instructions: req.body.instructions
  }

  Exercise.create(newExercise, (err, madeExercise) => {
    if(err){
      console.log(err);
    }

    res.redirect("/home");

  });
});

module.exports = router;
