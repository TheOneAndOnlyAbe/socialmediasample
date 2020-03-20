const express     = require("express"),
      router      = express.Router();

router.get("/", (req, res) => {
  res.render("landing");
});

router.get("*", (req, res) => {
  res.redirect("/");
});

module.exports = router;
