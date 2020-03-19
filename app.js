const express        = require("express"),
      app            = express(),
      flash          = require("connect-flash"),
      bParser        = require("body-parser"),
      mongoose       = require("mongoose"),
      passport       = require("passport"),
      LocalStrat     = require("passport-local"),
      methodOverride = require("method-override");

// Use flash message
app.use(flash());

// Connect to the Mongoose Database
mongoose.connect("",
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

// Essential Stuff
app.listen(8000, "localhost", function(){
    console.log("Server has started");
});

// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("Fish Selling Site has commenced...");
// });
