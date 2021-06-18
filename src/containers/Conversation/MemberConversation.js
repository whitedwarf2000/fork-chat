import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Badge } from '@fork-ui/core';

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
      <Badge.Dot
        color="var(--color-300)"
        overlap
        placement="bottom-end"
        style={{ fontSize: '0.675em' }}
      />
      <span style={{ margin: '0 15px' }}>{friend?.username}</span>
    </Friend>
  );
};

MemberConversation.propTypes = {
  conversation: PropTypes.object,
  currentUserId: PropTypes.string,
};

export default MemberConversation;
