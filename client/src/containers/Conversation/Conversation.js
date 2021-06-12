import React, { useState, useEffect } from 'react';
import api from 'api';
import MemberConversation from './MemberConversation';

const CURRENT_USER_ID = '60c22c2b4be3e81e6c84a625';

const Conversation = () => {
  const [userConversations, setUserConversations] = useState([]);

  const fetchConversations = async () => {
    const { data: conversations } = await api.get(`conversations/${CURRENT_USER_ID}`);
    if (conversations) {
      setUserConversations(conversations);
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <>
      {userConversations.length > 0 ? (
        userConversations.map(c => (
          <MemberConversation key={c._id} conversation={c} currentUserId={CURRENT_USER_ID} />
        ))
      ) : (
        <span>No Data</span>
      )}
    </>
  );
};

export default Conversation;
