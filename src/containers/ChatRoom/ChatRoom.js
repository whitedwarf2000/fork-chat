import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import useChat from './useChat';

const ChatRoom = () => {
  const { id } = useParams();
  const textAreaRef = useRef(null);

  const { messages, sendMessage } = useChat(id);
  const [currentMess, setCurrentMess] = useState('');

  const handleSendMessage = () => {
    if (!textAreaRef.current) {
      return;
    }
    sendMessage(textAreaRef.current.value);
    setCurrentMess('');
  };

  return (
    <div>
      <h2>Welcome to chat room {id}</h2>
      <div>
        <ol>
          {messages.map((message, i) => (
            <li
              key={i}
              className={`message-item ${
                message.ownedByCurrentUser ? 'my-message' : 'received-message'
              }`}>
              {message.body}
            </li>
          ))}
        </ol>
      </div>
      <textarea
        ref={textAreaRef}
        defaultValue={currentMess}
        placeholder="Write message..."
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

export default ChatRoom;
