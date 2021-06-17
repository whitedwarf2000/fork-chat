import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from 'api';

import MemberConversation from './MemberConversation';

const Conversation = ({ handleStartConversation, userId }) => {
  const [userConversations, setUserConversations] = useState([]);

  const fetchConversations = async id => {
    try {
      const { data: conversations } = await api.get(`conversations/${id}`);
      if (conversations) {
        setUserConversations(conversations);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (userId) {
      fetchConversations(userId);
    }
  }, [userId]);

  return (
    <>
      {userConversations.length > 0 ? (
        userConversations.map(c => (
          <div key={c._id} onClick={() => handleStartConversation(c)}>
            <MemberConversation conversation={c} currentUserId={userId} />
          </div>
        ))
      ) : (
        <span>No Data</span>
      )}
    </>
  );
};

Conversation.propTypes = {
  handleStartConversation: PropTypes.func,
  userId: PropTypes.string,
};
Conversation.defaultProps = {
  handleStartConversation: f => f,
};

export default Conversation;
