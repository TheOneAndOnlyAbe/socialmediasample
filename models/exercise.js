const mongoose = require("mongoose");

let exerciseSchema = new mongoose.Schema({
  name: String,
  reps: String,
  bodyParts: [],
  difficulty: String,
  instructions: String
});

module.exports = mongoose.model("Exercise", exerciseSchema);
