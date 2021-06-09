import React from 'react';

import { useParams } from 'react-router-dom';

const ChatRoom = () => {
  const { id } = useParams();

  return <h2>Welcome to chat room {id}</h2>;
};

export default ChatRoom;
