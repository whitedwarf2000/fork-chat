const router = require("express").Router();
const Message = require("../models/Message");

//add

router.post("/", async (req, res) => {
  try {
    res.status(200).json("");
  } catch (err) {
    res.status(500).json(err);
  }
});

//get

router.get("/:conversationId", async (req, res) => {
  try {
    res.status(200).json("");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;