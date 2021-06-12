import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from 'api';

const Direct = ({ currentChat }) => {
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
    <div className="message-wrapper">
      {mess.length > 0 ? (
        mess.map(m => <p key={m._id}>{m.text}</p>)
      ) : (
        <h3>Start new conversation</h3>
      )}
    </div>
  );
};

Direct.propTypes = {
  currentChat: PropTypes.object,
};

export default Direct;
