import React, { useRef } from 'react';

import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const inputRef = useRef(null);

  const joinChatRoom = () => {
    if (!inputRef?.current || inputRef.current.value.length === 0) {
      return;
    }
    history.push(`/room/${inputRef.current.value}`);
  };
  return (
    <div>
      <input ref={inputRef} defaultValue="" type="text" placeholder="Input your room name" />
      <button type="button" onClick={joinChatRoom}>
        Join chat room
      </button>
    </div>
  );
};

export default Home;
