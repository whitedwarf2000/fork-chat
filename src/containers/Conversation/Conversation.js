import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from 'api';

import MemberConversation from './MemberConversation';
import NoConversation from './NoConversation';
import ConversationSkeleton from '../Conversation/ConversationSkeleton';

import { ConversationWrapper } from './conversationStyles';

const Conversation = ({ handleStartConversation, userId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userConversations, setUserConversations] = useState([]);

  const fetchConversations = async id => {
    setIsLoading(true);
    try {
      const { data: conversations } = await api.get(`conversations/${id}`);
      if (conversations) {
        setUserConversations(conversations);
      }
    } catch (error) {
      return error;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (userId) {
      fetchConversations(userId);
    }
  }, [userId]);

  return (
    <ConversationWrapper>
      {userConversations.length > 0 ? (
        userConversations.map(c => (
          <div key={c._id} onClick={() => handleStartConversation(c)}>
            <MemberConversation conversation={c} currentUserId={userId} />
          </div>
        ))
      ) : isLoading ? (
        <>
          <ConversationSkeleton />
          <ConversationSkeleton />
          <ConversationSkeleton />
          <ConversationSkeleton />
        </>
      ) : (
        <NoConversation />
      )}
    </ConversationWrapper>
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
