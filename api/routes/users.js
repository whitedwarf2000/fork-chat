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

// Get user
router.get("/get/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, createdAt, __v, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Follow user
router.post("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });

        res.status(200).json("Follow successfully");
      } else {
        res.status(403).json("You already follow this user");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can not follow yourself");
  }
});

// Unfollow user
router.post("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);

      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });

        res.status(200).json("Unfollow successfully");
      } else {
        res.status(403).json("You must follow this user before");
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You can not unfollow yourself");
  }
});

module.exports = router;
