import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Badge } from '@fork-ui/core';

import api from 'api';

import { Friend } from './conversationStyles';

const MemberConversation = ({ conversation, currentUserId }) => {
  const [friend, setFriend] = useState({});

  const fetchUserInfo = async () => {
    try {
      const friendId = conversation.members.find(member => member !== currentUserId);
      const { data: friendInfo } = await api.get(`users/get/${friendId}`);

      if (friendInfo) {
        setFriend(friendInfo);
      }
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, [conversation, currentUserId]);

  return (
    <Friend>
      {/* temp color */}
      <Badge.Dot color="#10C2A5" overlap placement="bottom-end" style={{ fontSize: '0.675em' }}>
        <Avatar src={friend?.profilePicture}>B</Avatar>
      </Badge.Dot>
      <div style={{ margin: '0 15px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '190px',
          }}>
          <div style={{ color: '#071232', fontWeight: 'bold ' }}>{friend?.username}</div>
          <div>11:00</div>
        </div>
        <div>typing...</div>
      </div>
    </Friend>
  );
};

MemberConversation.propTypes = {
  conversation: PropTypes.object,
  currentUserId: PropTypes.string,
};

export default MemberConversation;
