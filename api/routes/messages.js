const router = require("express").Router();
const Message = require("../models/Message");

// new message
router.post("/", async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    await newMessage.save();
    res.status(200).json("Message was saved successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

// get message by conversation id
router.get("/:conversationId", async (req, res) => {
  try {
    const message = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(message);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;