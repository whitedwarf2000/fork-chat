import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import useChat from './useChat';

const ChatRoom = () => {
  const { id } = useParams();

  const { messages, sendMessage } = useChat(id);
  const [currentMess, setCurrentMess] = useState('');

  const handleChangeMessage = event => {
    setCurrentMess(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(currentMess);
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
        value={currentMess}
        onChange={handleChangeMessage}
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
