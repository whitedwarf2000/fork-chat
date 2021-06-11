const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Update user
router.post("/update/:id", async (req, res) => {
  if (req.body.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("User has been updated")
  } catch (error) {
    return res.status(500).json(error);
  }
});
// Remove user
router.post("/remove/:id", async (req, res) => {
  try {
    req.body.isRemoved = true;
    await User.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("User has been removed")
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
