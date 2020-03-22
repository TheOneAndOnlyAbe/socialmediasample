const express        = require("express"),
      app            = express(),
      flash          = require("connect-flash"),     // This is to set up flash messages to help users know when they've done an actions
      bParser        = require("body-parser"),
      mongoose       = require("mongoose"),          // This is to control server data
      passport       = require("passport"),          // Passport is the way I willw handle passwords
      LocalStrat     = require("passport-local"),
      methodOverride = require("method-override"),   // This is good for additional routes, not just GET or PUT
      myPort         = process.env.PORT || 8000,     // These two make it easier to work in a local environment
      myIP           = process.env.IP   || "localhost",
      indexRoute     = require("./routes/index.js"), // Gets the index routes
      Exercise       = require("./models/exercise.js");

// Data for testing
// var newExercise = {
//   name : "Pushup",
//   reps : "10",
//   difficulty : "beginner",
//   instructions : "https://43nnuk1fz4a72826eo14gwfb-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/Basic-Pushup.jpg"
// }
//
// Exercise.create(newExercise, (err, madeExercise) => {
//   if(err){
//       console.log(err);
//   }
//   else{
//       console.log("Exercise was made: " + madeExercise);
//   }
// });

// Use flash message
app.use(flash());

// Connect to the Mongoose Database
mongoose.connect("mongodb://abemoreno:20User01@ds263436.mlab.com:63436/socialmediatest",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Don't have to say file.ejs
app.set("view engine", "ejs");
app.use(bParser.urlencoded({extended: true}));

// Able to automatically use public folder to access styling and other stuff like js files.
app.use(express.static(__dirname + "/public"));

// Use method-override
app.use(methodOverride("_method"));

// Make the application use the index routes
app.use(indexRoute);

// Essential stuff
app.listen(myPort, myIP, function(){
    console.log("Exerice generator has executed order 66...");
});
