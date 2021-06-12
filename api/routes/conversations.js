const router = require("express").Router();
const Conversation = require("../models/Conversation");

// new conv
router.post("/", async (req, res) => {
  try {
    const newConversation = new Conversation({
      members: [req.body.senderId, req.body.receiverId],
    });
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get conv of user
router.get("/:userId", async (req, res) => {
  try {
    // find conversation will return array of conversation
    // instead of once when you use findOne
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] }
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;