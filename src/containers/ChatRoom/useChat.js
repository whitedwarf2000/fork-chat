import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessageEvent';
const SOCKET_SERVER_URL = 'http://localhost:4000';

const useChat = roomId => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL, {
      query: { roomId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, message => {
      // message is a object defined at line 31
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages(prevMessage => [...prevMessage, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [roomId]);

  const sendMessage = messageBody => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    });
  };

  return {
    messages,
    sendMessage,
  };
};

export default useChat;
