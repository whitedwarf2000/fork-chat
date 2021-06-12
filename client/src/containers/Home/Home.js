import React, { useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from 'api';

import Conversation from 'containers/Conversation';

const CURRENT_USER_ID = '60c22c2b4be3e81e6c84a625';

const Home = () => {
  const history = useHistory();
  const inputRef = useRef(null);

  const [userInfo, setUserInfo] = useState({});

  const joinChatRoom = () => {
    if (!inputRef?.current || inputRef.current.value.length === 0) {
      return;
    }
    history.push(`/room/${inputRef.current.value}`);
  };

  const fetchUser = async () => {
    const { data: user } = await api.get(`users/get/${CURRENT_USER_ID}`);

    if (user) {
      setUserInfo(user);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Hi {userInfo?.username}</h1>
      <div className="conversation-wrapper">{userInfo?._id ? <Conversation /> : null}</div>
      <input ref={inputRef} defaultValue="" type="text" placeholder="Input your room name" />
      <button type="button" onClick={joinChatRoom}>
        Join chat room
      </button>
    </div>
  );
};

export default Home;
