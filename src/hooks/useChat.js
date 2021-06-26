import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const NEW_CHAT_MESSAGE_EVENT = 'newChatMessageEvent';
const TYPING_EVENT = 'typing';
const SOCKET_SERVER_URL = process.env.SOCKET_SERVER_URL;

const useChat = conversationId => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(null);

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io(SOCKET_SERVER_URL, {
      query: { conversationId },
    });

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, message => {
      // message is a object defined at line 31
      setMessages([{ ...message }]);
    });

    socketRef.current.on(TYPING_EVENT, data => {
      const { isTyping, sender } = data;

      if (!isTyping) {
        setTyping(null);
      } else {
        setTyping(sender);
      }
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [conversationId]);

  const sendMessage = (newMessage, reply, userId, receiverId) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      text: newMessage,
      senderId: userId,
      receiverId,
      conversationId,
      reply,
    });
  };

  const handleTyping = (newMessage, user) => {
    socketRef.current.emit(TYPING_EVENT, {
      isTyping: newMessage.length > 0,
      sender: user,
    });
  };

  return {
    messages,
    sendMessage,
    handleTyping,
    typing,
  };
};

export default useChat;
