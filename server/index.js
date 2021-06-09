const server = require('http').createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

const PORT = 4000;
const NEW_CHAT_MESSAGE_EVENT = 'newChatMessageEvent';

io.on('connection', socket => {
  // eslint-disable-next-line no-console
  console.log(`Client ${socket.id} connected!`);

  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  socket.on(NEW_CHAT_MESSAGE_EVENT, data => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  socket.on('disconnect', () => {
    // eslint-disable-next-line no-console
    console.log(`Client ${socket.id} disconnected!`);
    socket.leave(roomId);
  });
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${PORT}`);
});
