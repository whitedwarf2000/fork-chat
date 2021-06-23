import React, { useState } from 'react';

import Conversation from 'containers/Conversation';
import Direct from 'containers/Direct';
import CurrentControl from './CurrentControl';

import useAuth from 'hooks/useAuth';

import { LeftSidebar, ConversationList, HomeWrapper } from './homeStyles';

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
        <CurrentControl />
        <span style={{ margin: '0 15px' }}>{userInfo?.username}</span>
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
