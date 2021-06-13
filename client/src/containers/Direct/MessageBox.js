import React, { useState } from 'react';
import PropTypes from 'prop-types';

import api from 'api';

const MessageBox = ({ currentChat, userId }) => {
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
