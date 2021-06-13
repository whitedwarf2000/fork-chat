import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import api from 'api';

const AllMessage = ({ currentChat, userId }) => {
  const [mess, setMess] = useState([]);

  const fetchMessageOfConversation = async conversationId => {
    try {
      const { data: messages } = await api.get(`/messages/${conversationId}`);
      if (messages) {
        setMess(messages);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (currentChat?._id) {
      fetchMessageOfConversation(currentChat._id);
    }
  }, [currentChat]);

  return (
    <div className="message-wrapper" style={{ width: '300px', height: '300px' }}>
      {mess.length > 0 ? (
        mess.map(m => (
          <p
            key={m._id}
            className={`${userId === m.sender ? 'own-message' : 'message'}`}
            style={{ textAlign: userId === m.sender ? 'end' : 'left' }}>
            {m.text}
          </p>
        ))
      ) : (
        <h3>Start new conversation</h3>
      )}
    </div>
  );
};

AllMessage.propTypes = {
  currentChat: PropTypes.object,
  userId: PropTypes.string,
};

export default AllMessage;
