import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from 'api';

import { CURRENT_USER_ID } from 'constants.js';

import MemberConversation from './MemberConversation';

const Conversation = ({ handleStartConversation }) => {
  const [userConversations, setUserConversations] = useState([]);

  const fetchConversations = async () => {
    try {
      const { data: conversations } = await api.get(`conversations/${CURRENT_USER_ID}`);
      if (conversations) {
        setUserConversations(conversations);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <>
      {userConversations.length > 0 ? (
        userConversations.map(c => (
          <div key={c._id} onClick={() => handleStartConversation(c)}>
            <MemberConversation conversation={c} currentUserId={CURRENT_USER_ID} />
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
};
Conversation.defaultProps = {
  handleStartConversation: f => f,
};

export default Conversation;
