import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessageEvent';
const SOCKET_SERVER_URL = 'http://localhost:4000';

const useChat = conversationId => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL, {
      query: { conversationId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, message => {
      // message is a object defined at line 31
      setMessages(prevMessage => [...prevMessage, { ...message }]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [conversationId]);

  const sendMessage = (newMessage, userId, receiverId) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      text: newMessage,
      sender: userId,
      receiverId,
      conversationId,
    });
  };

  return {
    messages,
    sendMessage,
  };
};

export default useChat;
