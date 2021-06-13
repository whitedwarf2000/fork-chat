const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const conversationRoute = require("./routes/conversations");
const messageRoute = require("./routes/messages");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// api route
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessageEvent';

const io = require('socket.io')(4000, {
  cors: {
    origin: '*',
  },
});
io.on('connection', socket => {
  // eslint-disable-next-line no-console
  console.log(`Client ${socket.id} connected!`);

  const { conversationId } = socket.handshake.query;
  socket.join(conversationId);

  socket.on(NEW_CHAT_MESSAGE_EVENT, data => {
    io.in(conversationId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log(`Client ${socket.id} disconnected!`);
    socket.leave(conversationId);
  });
});

app.listen(8800, () => {
  console.log("Backend server is running!");
});