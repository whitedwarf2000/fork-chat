const router = require("express").Router();

router.get("/", (req, res) => {
  req.send("Post route");
});

module.exports = router;
