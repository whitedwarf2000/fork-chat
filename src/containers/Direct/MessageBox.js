import React, { useState } from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import useChat from 'hooks/useChat';

const MessageBox = ({ currentChat, userId }) => {
  const { sendMessage } = useChat(currentChat._id);
  const [currentMess, setCurrentMess] = useState('');

  const handleChangeMessage = event => {
    setCurrentMess(event.target.value);
  };

  const handleSendMessage = async () => {
    const payload = {
      conversationId: currentChat._id,
      sender: userId,
      text: currentMess,
    };

    const receiverId = currentChat.members.find(member => member !== userId);
    sendMessage(currentMess, userId, receiverId);

    try {
      await api.post('messages', {
        ...payload,
      });
    } catch (error) {
      return error;
    }

    setCurrentMess('');
  };

  return (
    <>
      <textarea
        value={currentMess}
        onChange={handleChangeMessage}
        placeholder="Write message..."
        style={{ width: '300px', resize: 'none', minHeight: '30px', maxHeight: '100px' }}
        className="new-message-input-field"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </>
  );
};

MessageBox.propTypes = {
  currentChat: PropTypes.object,
  userId: PropTypes.string,
};

export default MessageBox;
