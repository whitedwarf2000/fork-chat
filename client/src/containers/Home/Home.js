import React, { useEffect, useState } from 'react';

import api from 'api';

import { CURRENT_USER_ID } from 'constants.js';

import Conversation from 'containers/Conversation';
import Direct from 'containers/Direct';

const Home = () => {
  const [userInfo, setUserInfo] = useState({});
  const [currentChat, setCurrentChat] = useState(null);

  const handleStartConversation = convers => {
    if (convers !== currentChat) {
      setCurrentChat(convers);
    }
  };

  const fetchUser = async () => {
    try {
      const { data: user } = await api.get(`users/get/${CURRENT_USER_ID}`);

      if (user) {
        setUserInfo(user);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Hi {userInfo?.username}</h1>
      <div className="conversation-wrapper">
        {userInfo?._id ? <Conversation handleStartConversation={handleStartConversation} /> : null}
      </div>
      {currentChat ? <Direct currentChat={currentChat} /> : <h3>No current chat</h3>}
    </div>
  );
};

export default Home;
