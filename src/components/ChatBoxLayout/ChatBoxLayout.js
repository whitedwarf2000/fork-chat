import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@fork-ui/core';

import {
  ChatBoxLayoutWrapper,
  ChatBoxHeader,
  ChatBoxTitle,
  ChatBoxMenu,
} from './chatBoxLayoutStyles';

const ChatBoxLayout = ({ title, children }) => {
  return (
    <ChatBoxLayoutWrapper>
      <ChatBoxHeader>
        <ChatBoxTitle>{title}</ChatBoxTitle>
        <ChatBoxMenu>
          {/* temp color */}
          <Button
            style={{
              margin: '0 0.25em',
              backgroundColor: '#BFE8E1',
              color: '#1F8070',
              borderRadius: 'var(--border-radius-medium)',
            }}>
            <span>Message</span>
          </Button>
          <Button
            style={{
              margin: '0 0.25em',
              borderRadius: 'var(--border-radius-medium)',
            }}>
            <span>Participants</span>
          </Button>
        </ChatBoxMenu>
      </ChatBoxHeader>
      <div>{children}</div>
    </ChatBoxLayoutWrapper>
  );
};

ChatBoxLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};

export default ChatBoxLayout;
