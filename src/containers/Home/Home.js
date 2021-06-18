import React, { useState } from 'react';
import { Avatar, Badge } from '@fork-ui/core';

import Conversation from 'containers/Conversation';
import Direct from 'containers/Direct';

import useAuth from 'hooks/useAuth';

import { LeftSidebar, User, ConversationList, HomeWrapper } from './homeStyles';

const Home = () => {
  const { userInfo } = useAuth();
  const [currentChat, setCurrentChat] = useState(null);

  const handleStartConversation = convers => {
    if (convers !== currentChat) {
      setCurrentChat(convers);
    }
  };

  return (
    <HomeWrapper>
      <LeftSidebar>
        <User>
          <Badge.Dot color="#0df316" overlap placement="bottom-end" style={{ fontSize: '0.675em' }}>
            <Avatar src={userInfo?.profilePicture} />
          </Badge.Dot>
          <span style={{ margin: '0 15px' }}>{userInfo?.username}</span>
        </User>
        <ConversationList>
          {userInfo?._id ? (
            <Conversation
              userId={userInfo?._id}
              handleStartConversation={handleStartConversation}
            />
          ) : null}
        </ConversationList>
      </LeftSidebar>
      {currentChat && userInfo ? (
        <Direct user={userInfo} currentChat={currentChat} />
      ) : (
        <h3>No current chat</h3>
      )}
    </HomeWrapper>
  );
};

export default Home;
