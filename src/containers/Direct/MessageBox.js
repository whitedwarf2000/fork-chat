import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from 'api';

import useChat from 'hooks/useChat';

const MessageBox = ({ currentChat, user }) => {
  const { _id: userId } = user;
  const chatBoxRef = useRef(null);
  const { sendMessage, handleTyping } = useChat(currentChat._id);
  const [currentMess, setCurrentMess] = useState('');

  const handleChangeMessage = event => {
    setCurrentMess(event.target.value);
  };

  const handleSendMessage = async () => {
    const payload = {
      conversationId: currentChat._id,
      senderId: userId,
      text: currentMess,
    };

    const receiverId = currentChat.members.find(member => member !== userId);
    sendMessage(currentMess, userId, receiverId);
    setCurrentMess('');
    handleTyping('', user);

    try {
      await api.post('messages', {
        ...payload,
      });
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (!chatBoxRef.current) {
      return;
    }
    chatBoxRef.current.addEventListener('keyup', () => {
      handleTyping(currentMess, user);
    });

    return () => {
      chatBoxRef.current.removeEventListener('keyup', () => {
        handleTyping(currentMess, user);
      });
    };
  }, [chatBoxRef, currentMess, user]);

  return (
    <>
      <textarea
        ref={chatBoxRef}
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
  user: PropTypes.object,
};

export default MessageBox;
