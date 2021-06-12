import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import api from 'api';

const MemberConversation = ({ conversation, currentUserId }) => {
  const [friend, setFriend] = useState({});

  const fetchUserInfo = async () => {
    const friendId = conversation.members.find(member => member !== currentUserId);
    const { data: friendInfo } = await api.get(`users/get/${friendId}`);

    if (friendInfo) {
      setFriend(friendInfo);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [conversation, currentUserId]);

  return (
    <div className="conversation">
      <img
        className="conversation-img"
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FixJomm_no-avatar-png-circle-transparent-png%2F&psig=AOvVaw0zTcJr_7aJA-ERZuk0TEJ9&ust=1623578790719000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMj5iMXskfECFQAAAAAdAAAAABAD"
        alt=""
      />
      <span className="conversation-name">{friend?.username}</span>
    </div>
  );
};

MemberConversation.propTypes = {
  conversation: PropTypes.object,
  currentUserId: PropTypes.string,
};

export default MemberConversation;
