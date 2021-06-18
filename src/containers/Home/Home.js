import React, { useState } from 'react';

import Conversation from 'containers/Conversation';
import Direct from 'containers/Direct';

import useAuth from 'hooks/useAuth';

const Home = () => {
  const { userInfo } = useAuth();
  const [currentChat, setCurrentChat] = useState(null);

  const handleStartConversation = convers => {
    if (convers !== currentChat) {
      setCurrentChat(convers);
    }
  };

  return (
    <div>
      <h1>Hi {userInfo?.username}</h1>
      <div className="conversation-wrapper">
        {userInfo?._id ? (
          <Conversation userId={userInfo?._id} handleStartConversation={handleStartConversation} />
        ) : null}
      </div>
      {currentChat && userInfo ? (
        <Direct user={userInfo} currentChat={currentChat} />
      ) : (
        <h3>No current chat</h3>
      )}
    </div>
  );
};

export default Home;
