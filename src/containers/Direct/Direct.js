import React from 'react';
import PropTypes from 'prop-types';

import ChatBoxLayout from 'components/ChatBoxLayout';

import MessageBox from './MessageBox';
import AllMessage from './AllMessages';

import { DirectWrapper } from './directStyles';

const Direct = ({ currentChat, user }) => {
  return (
    <DirectWrapper>
      <ChatBoxLayout title="Group Chat">
        <AllMessage user={user} currentChat={currentChat} />
        <MessageBox user={user} currentChat={currentChat} />
      </ChatBoxLayout>
    </DirectWrapper>
  );
};

Direct.propTypes = {
  currentChat: PropTypes.object,
  user: PropTypes.object,
};

export default Direct;
